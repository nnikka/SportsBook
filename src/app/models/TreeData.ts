import { Sport } from './Sport';

export class TreeData {
    public data: Sport[] = [];
    
    constructor(sports:Sport[]) {
        sports.sort((a, b) =>  (a.priority > b.priority) ? -1 : (a.priority < b.priority) ? 1 : 0 )
        .map(sport => this.data.push(new Sport(sport.id, sport.priority, sport.name, sport.total, sport.countries)))
    }

}