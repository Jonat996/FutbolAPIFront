export interface Paises {
    id:               number;
    country_name:     string;
    country_logo:     string;
    continent_id:     number;
    confederation_id: number;
    created_at:       Date;
    updated_at:       Date;
    leagues:          League[];
    continent:        Continent;
    confederation:    Confederation;
}

export interface Confederation {
    id:                 number;
    confederation_name: string;
    continent_id:       number;
    second_continent:   null;
    confederation_logo: null;
    created_at:         Date;
    updated_at:         Date;
}

export interface Continent {
    id:             number;
    continent_name: string;
    created_at:     Date;
    updated_at:     Date;
}

export interface League {
    id:          number;
    league_name: string;
    country_id:  number;
    division_id: number;
    league_logo: string;
    created_at:  Date;
    updated_at:  Date;
}
