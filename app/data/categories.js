class Categories{
    constructor(largeHouseholdAppliances, smallHouseholdAppliances, itAndTelecommunicationsEquipment, 
        consumerEquipment, lightingEquipment, electricalAndElectronicTools, 
        toysLeisureAndSportsEquipment, medicalDevices, monitoringAndControlInstruments,
        automaticDispensers, appliancesContainingRefrigerants, gasDischargeLampsAndLedLightSources, 
        displayEquipment, photovoltaicPanel){
        this._largeHouseholdAppliances = largeHouseholdAppliances;
        this._smallHouseholdAppliances = smallHouseholdAppliances;
        this._itAndTelecommunicationsEquipment = itAndTelecommunicationsEquipment;
        this._consumerEquipment = consumerEquipment;
        this._lightingEquipment = lightingEquipment;
        this._electricalAndElectronicTools = electricalAndElectronicTools;
        this._toysLeisureAndSportsEquipment = toysLeisureAndSportsEquipment;
        this._medicalDevices = medicalDevices;
        this._monitoringAndControlInstruments = monitoringAndControlInstruments;
        this._automaticDispensers = automaticDispensers;
        this._appliancesContainingRefrigerants = appliancesContainingRefrigerants;
        this._gasDischargeLampsAndLedLightSources = gasDischargeLampsAndLedLightSources;
        this._displayEquipment = displayEquipment;
        this._photovoltaicPanel = photovoltaicPanel;
    }    
}

module.exports = Categories;