// app/page.tsx

import { modularUnits } from "./data";
import ModularUnitCard from "./modular-unit-card";

export default function ModularUnit() {
    return (
        <main>
            {/* Images on Right */}
            {modularUnits.map((unit:any , i:number)=>(
                <ModularUnitCard unit={unit} key={i} imagePosition={i % 2 === 0 ? "left" :"right"} />
            ))}
        </main>
    );
}
