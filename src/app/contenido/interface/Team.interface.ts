export interface Team {
    id:                number;
    team_name:         string;
    international_id:  number;
    league_id:         number;
    team_logo:         string;
    created_at:        Date;
    updated_at:        Date;
    league:            League;
    international:     International;
    championships:     Championship[];
    sub_championships: Championship[];
}

export interface Championship {
    id:                        number;
    continental_tournament_id: number | null;
    national_tournament_id:    number | null;
    champion_id:               number;
    oponent_id:                number;
    year:                      string;
    created_at:                Date;
    updated_at:                Date;
    national_tournament?:      League | null;
    continental_tournament?:   International | null;
}

export interface International {
    id:               number;
    tournament_name:  string;
    division_id:      number;
    confederation_id: number;
    cup:string;
    tournament_logo:  string;
    created_at:       Date;
    updated_at:       Date;
    confederation?:   Confederation;
}

export interface Confederation {
    id:                 number;
    confederation_name: string;
    continent_id:       number;
    second_continent:   null;
    confederation_logo: string;
    created_at:         Date;
    updated_at:         Date;
}

export interface League {
    id:          number;
    league_name: string;
    country_id:  number;
    division_id: number;
    cup:string;
    league_logo: string;
    created_at:  Date;
    updated_at:  Date;
    country?:    Country;
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
