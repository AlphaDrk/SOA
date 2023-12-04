// reglement.model.ts
import { Facture } from "./facture";

export class Reglement {
    idR: number | undefined;
    dateR: string | undefined;
    montant: number | undefined;
    type: PaymentItem | undefined;
    chequeTraiteNumber: string | undefined;
    facture: Facture | undefined;

    constructor(idR: number | undefined, dateR: string | undefined, montant: number | undefined, type: PaymentItem | undefined, chequeTraiteNumber: string | undefined, facture: Facture | undefined) {
        this.idR = idR;
        this.dateR = dateR;
        this.montant = montant;
        this.type = type;
        this.chequeTraiteNumber = chequeTraiteNumber;
        this.facture = facture;
    }
}
