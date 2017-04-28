export class dataApp {
    appName: string;
    regex: any;
}

export const appConstant: dataApp = {
    appName: 'My account',
    regex: {
        email: '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$',
        date: '^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$',
        nif: '^([0-9]{8})([TRWAGMYFPDXBNJZSQVHLCKET]{1}|[trwagmyfpdxbnjzsqvhlcket]{1})$',
        tarjetaClub: '^([0-9]{4,8})$'
    }
}
