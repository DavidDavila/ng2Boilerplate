import { Injectable } from '@angular/core';
import { Mall } from './mall.model';

@Injectable()
export class TicketModel {
    private _ticketId: string;
    private _clientId: string;
    private _date: Date;
    private _items: [{
        code: string;
        numberUnits: number;
        vat: number;
        netAmount: number;
        subFamily: string;
        description: string;
        auxiliaryData: {}
    }];
    private _refunds: TicketModel;
    private _mall: Mall;
    private _lines: String[];
    private _header: {
        netAmount: number;
        numberItems: number;
        numberLines: number;
        numberLinesItems: number;
        numberLinesVat: number;
        operator: string;
        cashNumber: string;
        ticketType: string;
        _ticketType: {
            code: string;
            description: string
        };
        ticketNumber: string;
        operationType: string;
        _operationType: {
            code: string;
            description: string
        }
    };
    private _concepts: [{
        code: string;
        conceptType: string;
        _conceptType: {
            code: string;
            description: string
        };
        description: string;
        amount: number;
        auxiliaryData: any[];
    }];
    private _links: {
        self:
            { href: string }
    };

    constructor() { }

    get mall(): Mall {
        return this._mall;
    }

    set mall(value: Mall) {
        this._mall = value;
    }

    get lines(): String[] {
        return this._lines;
    }

    set lines(value: String[]) {
        this._lines = value;
    }

    get concepts(): [{
        code: string;
        conceptType: string;
        _conceptType: {
            code: string;
            description: string
        };
        description: string;
        amount: number;
        auxiliaryData: any[];
    }] {
        return this._concepts;
    }

    set concepts(value: [{
        code: string;
        conceptType: string;
        _conceptType: {
            code: string;
            description: string
        };
        description: string;
        amount: number;
        auxiliaryData: any[];
    }]) {
        this._concepts = value;
    }

    get links(): { self: { href: string } } {
        return this._links;
    }

    set links(value: { self: { href: string } }) {
        this._links = value;
    }

    get header(): {
        netAmount: number;
        numberItems: number;
        numberLines: number;
        numberLinesItems: number;
        numberLinesVat: number;
        operator: string;
        cashNumber: string;
        ticketType: string;
        _ticketType: {
            code: string;
            description: string
        };
        ticketNumber: string;
        operationType: string;
        _operationType: {
            code: string;
            description: string
        }
    } {
        return this._header;
    }

    set header(value: {
        netAmount: number;
        numberItems: number;
        numberLines: number;
        numberLinesItems: number;
        numberLinesVat: number;
        operator: string;
        cashNumber: string;
        ticketType: string;
        _ticketType: {
            code: string;
            description: string
        };
        ticketNumber: string;
        operationType: string;
        _operationType: {
            code: string;
            description: string
        }
    }) {
        this._header = value;
    }

    set date(value: Date) {
        this._date = value;
    }

    set ticketId(value: string) {
        this._ticketId = value;
    }

    set clientId(value: string) {
        this._clientId = value;
    }

    get date(): Date {
        return this._date;
    }

    get items(): [{
        code: string;
        numberUnits: number;
        vat: number;
        netAmount: number;
        subFamily: string;
        description: string;
        auxiliaryData: {}
    }] {
        return this._items;
    }

    set items(value: [{
        code: string;
        numberUnits: number;
        vat: number;
        netAmount: number;
        subFamily: string;
        description: string;
        auxiliaryData: {}
    }]) {
        this._items = value;
    }

    get refunds(): TicketModel {
        return this._refunds;
    }

    set refunds(value: TicketModel) {
        this._refunds = value;
    }

    get ticketId(): string {
        return this._ticketId;
    }

    get clientId(): string {
        return this._clientId;
    }
}
