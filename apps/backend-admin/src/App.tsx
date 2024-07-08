import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TravelerList } from "./traveler/TravelerList";
import { TravelerCreate } from "./traveler/TravelerCreate";
import { TravelerEdit } from "./traveler/TravelerEdit";
import { TravelerShow } from "./traveler/TravelerShow";
import { ExplorerList } from "./explorer/ExplorerList";
import { ExplorerCreate } from "./explorer/ExplorerCreate";
import { ExplorerEdit } from "./explorer/ExplorerEdit";
import { ExplorerShow } from "./explorer/ExplorerShow";
import { AccommodationList } from "./accommodation/AccommodationList";
import { AccommodationCreate } from "./accommodation/AccommodationCreate";
import { AccommodationEdit } from "./accommodation/AccommodationEdit";
import { AccommodationShow } from "./accommodation/AccommodationShow";
import { HostList } from "./host/HostList";
import { HostCreate } from "./host/HostCreate";
import { HostEdit } from "./host/HostEdit";
import { HostShow } from "./host/HostShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { CommissionList } from "./commission/CommissionList";
import { CommissionCreate } from "./commission/CommissionCreate";
import { CommissionEdit } from "./commission/CommissionEdit";
import { CommissionShow } from "./commission/CommissionShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Traveler"
          list={TravelerList}
          edit={TravelerEdit}
          create={TravelerCreate}
          show={TravelerShow}
        />
        <Resource
          name="Explorer"
          list={ExplorerList}
          edit={ExplorerEdit}
          create={ExplorerCreate}
          show={ExplorerShow}
        />
        <Resource
          name="Accommodation"
          list={AccommodationList}
          edit={AccommodationEdit}
          create={AccommodationCreate}
          show={AccommodationShow}
        />
        <Resource
          name="Host"
          list={HostList}
          edit={HostEdit}
          create={HostCreate}
          show={HostShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="Commission"
          list={CommissionList}
          edit={CommissionEdit}
          create={CommissionCreate}
          show={CommissionShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
