import React, { createContext, useState } from "react";

export const BotContext = createContext(null);

const getDefaultUserBots = () => {

    let userBotObject = {};
    for (let i = 101; i <= 200; i++) {
        userBotObject[i.toString()] = 0;
    }
    return userBotObject;

    // return userBotObject = {
    //     "101": 0,
    //     "102": 0,
    //     "103": 0,
    //     "104": 0,
    //     "105": 0,
    //     "106": 0,
    //     "107": 0,
    //     "108": 0,
    //     "109": 0,
    //     "110": 0,
    //     "111": 0,
    //     "112": 0,
    //     "113": 0,
    //     "114": 0,
    //     "115": 0,
    //     "116": 0,
    //     "117": 0,
    //     "118": 0,
    //     "119": 0,
    //     "120": 0,
    //     "121": 0,
    //     "122": 0,
    //     "123": 0,
    //     "124": 0,
    //     "125": 0,
    //     "126": 0,
    //     "127": 0,
    //     "128": 0,
    //     "129": 0,
    //     "130": 0,
    //     "131": 0,
    //     "132": 0,
    //     "133": 0,
    //     "134": 0,
    //     "135": 0,
    //     "136": 0,
    //     "137": 0,
    //     "138": 0,
    //     "139": 0,
    //     "140": 0,
    //     "141": 0,
    //     "142": 0,
    //     "143": 0,
    //     "144": 0,
    //     "145": 0,
    //     "146": 0,
    //     "147": 0,
    //     "148": 0,
    //     "149": 0,
    //     "150": 0,
    //     "151": 0,
    //     "152": 0,
    //     "153": 0,
    //     "154": 0,
    //     "155": 0,
    //     "156": 0,
    //     "157": 0,
    //     "158": 0,
    //     "159": 0,
    //     "160": 0,
    //     "161": 0,
    //     "162": 0,
    //     "163": 0,
    //     "164": 0,
    //     "165": 0,
    //     "166": 0,
    //     "167": 0,
    //     "168": 0,
    //     "169": 0,
    //     "170": 0,
    //     "171": 0,
    //     "172": 0,
    //     "173": 0,
    //     "174": 0,
    //     "175": 0,
    //     "176": 0,
    //     "177": 0,
    //     "178": 0,
    //     "179": 0,
    //     "180": 0,
    //     "181": 0,
    //     "182": 0,
    //     "183": 0,
    //     "184": 0,
    //     "185": 0,
    //     "186": 0,
    //     "187": 0,
    //     "188": 0,
    //     "189": 0,
    //     "190": 0,
    //     "191": 0,
    //     "192": 0,
    //     "193": 0,
    //     "194": 0,
    //     "195": 0,
    //     "196": 0,
    //     "197": 0,
    //     "198": 0,
    //     "199": 0,
    //     "200": 0
    // };
    
//The getDefaultYourBot variable is to set the useState default value as seen below.
}

export const BotContextProvider = (props) => {
    const [userBotItems, setUserBotItems] = useState(getDefaultUserBots());
    const addToUserBotObject = (botId) => {
        setUserBotItems((prev) => ({...prev, [botId]: prev[botId] + 1}))
    } 

    const removeFromUserBotObject = (botId) => {
        setUserBotItems((prev) => ({...prev, [botId]: prev[botId] - 2}))
    } 

    const contextValue = {userBotItems, addToUserBotObject, removeFromUserBotObject};

    return <BotContext.Provider value={contextValue}>{props.children}</BotContext.Provider>
}

export default BotContext