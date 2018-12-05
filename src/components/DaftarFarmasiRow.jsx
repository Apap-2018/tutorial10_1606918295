import React from "react";

export const DaftarFarmasiRow = props => {
    return (
        <tbody>
        {props.listFarmasi.map(farmasi => {
            return (
                <tr key={farmasi.id}>
                    <td>{farmasi.nama}</td>
                </tr>
            );
        })}
        </tbody>
    );
};