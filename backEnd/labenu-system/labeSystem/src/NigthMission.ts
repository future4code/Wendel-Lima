import { Mission } from "./Mission";
import moment from "moment";

class NigthMission extends Mission{
    public setName(name: string) {
        if(name.indexOf("-na-nigth") !== -1) {
            super.setName(name)
        }else {
            super.setName(name + "-na-nigth")
        }
    }
}

export const nigthMission = new NigthMission(
    '1', moment('18/02/2020', 'DD/MM/YYYY'), moment('18/08/2020'), [], [], 4
    )
    