export interface Ligas {
    id:          number;
    league_name: string;
    country_id:  number;
    division_id: number;
    league_logo: string;
    created_at:  Date;
    updated_at:  Date;
    country:     Country;
    teams:       Team[];
    division:    Division;
}

export interface Country {
    id:               number;
    country_name:     string;
    country_logo:     string;
    continent_id:     number;
    confederation_id: number;
    created_at:       Date;
    updated_at:       Date;
    confederation:    Confederation;
}

export interface Confederation {
    id:                 number;
    confederation_name: ConfederationName;
}

export enum ConfederationName {
    Afc = "AFC",
    Caf = "CAF",
    Concacaf = "Concacaf",
    Conmebol = "Conmebol",
    Uefa = "UEFA",
}

export interface Division {
    id:            number;
    division_name: DivisionName;
    created_at:    Date;
    updated_at:    Date;
}

export enum DivisionName {
    PrimeraDivisión = "Primera División",
    SegundaDivisión = "Segunda División",
    TerceraDivisión = "Tercera División",
}

export interface Team {
    id:               number;
    team_name:        string;
    international_id: number;
    league_id:        number;
    team_logo:        string;
    created_at:       Date;
    updated_at:       Date;
}
