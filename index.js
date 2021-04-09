// Write your solution in this file!


const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    //make new driver so we dont update the original driver.
    // const newDriver =  {...driver}
    // newDriver[key] = value
    //return newDriver
    return Object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    //modify original driver and return it
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    //delete key from a copy of driver and return new driver
    const newDriver = {...driver} 
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    // delete key from original driver and return driver
    delete driver[key]
    return driver
}


