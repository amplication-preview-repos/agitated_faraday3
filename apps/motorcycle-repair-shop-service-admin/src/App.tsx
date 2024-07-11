import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MotorcycleList } from "./motorcycle/MotorcycleList";
import { MotorcycleCreate } from "./motorcycle/MotorcycleCreate";
import { MotorcycleEdit } from "./motorcycle/MotorcycleEdit";
import { MotorcycleShow } from "./motorcycle/MotorcycleShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { MechanicList } from "./mechanic/MechanicList";
import { MechanicCreate } from "./mechanic/MechanicCreate";
import { MechanicEdit } from "./mechanic/MechanicEdit";
import { MechanicShow } from "./mechanic/MechanicShow";
import { PartsUsedList } from "./partsUsed/PartsUsedList";
import { PartsUsedCreate } from "./partsUsed/PartsUsedCreate";
import { PartsUsedEdit } from "./partsUsed/PartsUsedEdit";
import { PartsUsedShow } from "./partsUsed/PartsUsedShow";
import { RepairList } from "./repair/RepairList";
import { RepairCreate } from "./repair/RepairCreate";
import { RepairEdit } from "./repair/RepairEdit";
import { RepairShow } from "./repair/RepairShow";
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
        title={"MotorcycleRepairShopService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Motorcycle"
          list={MotorcycleList}
          edit={MotorcycleEdit}
          create={MotorcycleCreate}
          show={MotorcycleShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Mechanic"
          list={MechanicList}
          edit={MechanicEdit}
          create={MechanicCreate}
          show={MechanicShow}
        />
        <Resource
          name="PartsUsed"
          list={PartsUsedList}
          edit={PartsUsedEdit}
          create={PartsUsedCreate}
          show={PartsUsedShow}
        />
        <Resource
          name="Repair"
          list={RepairList}
          edit={RepairEdit}
          create={RepairCreate}
          show={RepairShow}
        />
      </Admin>
    </div>
  );
};

export default App;
