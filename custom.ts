//%  block="HOC 2020" weight=200 color=#d83b01
namespace hoc2020 {

    /**
     * Agent interact forward
     */
    //% block="تبديل ذراع الرافعة"
    export function flipLever() {
        agent.interact(FORWARD)
    }

    /**
     * Agent place Iron Bars
     */
    //% block="وضع القضبان الحديدية للأسفل"
    export function placeFence() {
        agent.setItem(IRON_BARS, 1, 1)
        agent.place(DOWN)
    }   

    /**
     * Agent till soil
     */
    //% block="مرات %n حرث وتحريك للأمام بمقدار"
    //% n.defl=1 
    export function tillSoil(n: number): void{
        for (let i = 0; i < n; i++){
            agent.till(UP)
            player.execute(
                "execute @c ~ ~ ~ detect ~ ~-1 ~ dirt 0 setblock ~ ~-1 ~ farmland 2"
            )
            agent.move(FORWARD,1)
        }        
    }         
    
    /**
     * Agent place wood down
     */
    //% block="مرات %n تحريك ووضع لوح الخشب بمقدار"
    //% n.defl=1 
    export function placePlanks(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(FORWARD, 1)

            agent.setItem(PLANKS_OAK, 1, 1)
            agent.place(DOWN)
        }        
    } 

    /**
     * Agent place rail down
     */
    //% block="وضع السكة للأسفل"
    export function placeRails(){
        agent.setItem(RAIL, 1, 1)
        agent.place(DOWN)
    }        

    /**
     * Lead ravager
     */
    //% block="مرات %n توجيه المدمر  للأمام بمقدار"
    //% n.defl=1 
    export function leadRavager(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(FORWARD,1)
            //loops.pause(200)
        }        
    }    

    /**
     * Agent move
     */
    //% block="تحريك الروبوت %d بمقدار %n مرات"
    //% n.defl=1 
    export function moveAgent(d: SixDirection, n: number): void{
        for (let i = 0; i < n; i++){
            agent.move(d,1)
        }        
    }     

    /**
     * Agent move up
     */
    //% block="يتسلق الروبوت للأعلى بمقدار %n مرات"
    //% n.defl=1 
    export function agentClimb(n: number): void{

        for (let i = 0; i < n; i++){
            agent.move(UP,1)
        }        
    }                         

    /**
     * Give player sapling
     */
    //% block="اقبل الهدية"
    export function acceptGift(){
        mobs.give(
            mobs.target(LOCAL_PLAYER),
            OAK_SAPLING,
            1
        )
    }  

    /**
     * Turn the Agent
     */
    //% block="تدوير الروبوت نحو %t"
    export function turnAgent(t: TurnDirection): void{
        agent.turn(t);
    }      
}

//%  block="HOC 2020 Cont" weight=200 color=#569138
namespace hoc2020Different {

    /**
     * Repeat code the specified number of times
     */
    //% block="تكرار بمقدار $n مرات"
    //% n.defl=2
    //% handlerStatement=1
    //% draggableParameters="reporter"
    export function customRepeatLoop(n: number, handler: () => void) {
        for (let i = 0; i < n; i++){
            handler();
        }
    }
}
