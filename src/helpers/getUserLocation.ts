import Swal from "sweetalert2";

export const getUserLocation = async(): Promise<[number, number]> => {
    return new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve([coords.longitude, coords.latitude]);
            },
            err => {
                Swal.fire('error', 'No se pudo obtener tu ubicación', 'error');
                console.log(err)
                reject();
            }
        );
    })
}