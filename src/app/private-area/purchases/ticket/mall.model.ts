import { Injectable } from '@angular/core';

@Injectable()
export class Mall {
    private _community: string;
    private _province: string;
    private _name: string;
    private _address: string;
    private _postalCode: string;
    private _city: string;
    private _phone: string;
    private _timetable: string;
    private _festiveTimetable: string;
    private _latitude: number;
    private _longitude: number;
    private _facebook: string;
    private _twitter: string;
    private _instagram: string;
    private _youtube: string;
    private _ticketLanguage: string;
    private _internalId: string;
    private _atica: string;
    private _storeServices: any[];
    private _carrefourServices: (string | string | string | string)[];

    get community(): string {
        return this._community;
    }

    set community(value: string) {
        this._community = value;
    }

    get province(): string {
        return this._province;
    }

    set province(value: string) {
        this._province = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get postalCode(): string {
        return this._postalCode;
    }

    set postalCode(value: string) {
        this._postalCode = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get timetable(): string {
        return this._timetable;
    }

    set timetable(value: string) {
        this._timetable = value;
    }

    get festiveTimetable(): string {
        return this._festiveTimetable;
    }

    set festiveTimetable(value: string) {
        this._festiveTimetable = value;
    }

    get latitude(): number {
        return this._latitude;
    }

    set latitude(value: number) {
        this._latitude = value;
    }

    get longitude(): number {
        return this._longitude;
    }

    set longitude(value: number) {
        this._longitude = value;
    }

    get facebook(): string {
        return this._facebook;
    }

    set facebook(value: string) {
        this._facebook = value;
    }

    get twitter(): string {
        return this._twitter;
    }

    set twitter(value: string) {
        this._twitter = value;
    }

    get instagram(): string {
        return this._instagram;
    }

    set instagram(value: string) {
        this._instagram = value;
    }

    get youtube(): string {
        return this._youtube;
    }

    set youtube(value: string) {
        this._youtube = value;
    }

    get ticketLanguage(): string {
        return this._ticketLanguage;
    }

    set ticketLanguage(value: string) {
        this._ticketLanguage = value;
    }

    get internalId(): string {
        return this._internalId;
    }

    set internalId(value: string) {
        this._internalId = value;
    }

    get atica(): string {
        return this._atica;
    }

    set atica(value: string) {
        this._atica = value;
    }

    get storeServices(): any[] {
        return this._storeServices;
    }

    set storeServices(value: any[]) {
        this._storeServices = value;
    }

    get carrefourServices(): (string | string | string | string)[] {
        return this._carrefourServices;
    }

    set carrefourServices(value: (string | string | string | string)[]) {
        this._carrefourServices = value;
    }
}
