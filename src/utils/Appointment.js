const cors = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "http://si-appointment.herokuapp.com/api";

export const Appointment = {
    getAllPasien() {
        return fetch(`${cors}${baseUrl}/1/getAllPasien`, {
            method: "GET"
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                return jsonResponse;
            });
    },
    getAllFarmasi() {
        return fetch(`${cors}${baseUrl}/1/getAllStaffFarmasi`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                console.log(jsonResponse);
                return jsonResponse;
            });
    },
    getDetailPasien(idPasien) {
        return fetch(`${cors}${baseUrl}/getPasien/${idPasien}`, {
            method: "GET"
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse;
            });
    },
    updateStatusPasien(requestBody) {
        return fetch(`${cors}${baseUrl}/1/updatePasien`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse;
            });
    },

    addLabResult(requestBody) {
        return fetch(`${cors}${baseUrl}/1/addLabResult`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse;
            });
    }


}