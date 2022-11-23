export interface Confederacion {
    id:                     number;
    confederation_name:     string;
    continent_id:           number;
    second_continent:       null;
    confederation_logo:     null;
    created_at:             Date;
    updated_at:             Date;
    countries:              Country[];
    continent:              Continent;
    continent_2:            null;
    continental_tournament: ContinentalTournament[];
}

export interface Continent {
    id:             number;
    continent_name: string;
    created_at:     Date;
    updated_at:     Date;
}

export interface ContinentalTournament {
    id:               number;
    tournament_name:  string;
    division_id:      number;
    confederation_id: number;
    tournament_logo:  string;
    created_at:       Date;
    updated_at:       Date;
}

export interface Country {
    id:               number;
    country_name:     string;
    country_logo:     string;
    continent_id:     number;
    confederation_id: number;
    created_at:       Date;
    updated_at:       Date;
}
