import React from "react";
import { Loading } from "../components/Loading";
import { TableContainer } from "../containers/TableContainer";
import { Appointment } from "../utils/Appointment";
import { DaftarFarmasiRow } from "../components/DaftarFarmasiRow";

export class DaftarFarmasi extends React.Component {
    /**
     * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state.
     * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
     */

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            listPasien: []
        };
    }
    componentDidMount() {
        Appointment.getAllFarmasi().then(response => {
            this.setState({
                loading: false,
                listFarmasi: response.result
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <Loading msg="Fetching Data..." />;
        } else {
            return (
                <TableContainer title="Daftar Staff Farmasi" header={["Nama Staff"]}>
                    <DaftarFarmasiRow listFarmasi={this.state.listFarmasi} />
                </TableContainer>
            );
        }
    }
}