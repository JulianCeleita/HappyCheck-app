import React, { useEffect, useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { addFavorite, addPeople } from "@/redux/states";
import store from "@/redux/store";
import { get } from 'https';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: "false",
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams | any) => (
        <>
          <Checkbox
            size="small"
            checked={findPerson(params.row)}
            onChange={() => handleChange(params.row)}
          />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Happines",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value} </>,
    },
  ];
  useEffect(() => {
    dispatch(addPeople(People));
  }, [])
  
  return (
    <DataGrid
      rows={store.getState().people}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;
