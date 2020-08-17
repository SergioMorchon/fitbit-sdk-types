<Slider label="Example" settingsKey="slider" min="0" max="60" />;

// Work with typed settings

interface SliderSettingsType {
	stringKey : string,
    booleanKey : boolean,
    numberKey : number,
    assignableKey: number | undefined,
}

<Slider<SliderSettingsType>
    label="Example" 
    settingsKey="numberKey" 
    min="0" 
    max="60" />;

<Slider<SliderSettingsType>
    label="Example" 
    settingsKey="assignableKey" 
    min="0" 
    max="60" />;

/*

// examples should not, and do not, work
<Slider<SliderSettingsType>
    label="Example" 
    settingsKey="slider" 
    min="0" 
    max="60" />;

<Slider<SliderSettingsType>
    label="Example" 
    settingsKey="stringKey" 
    min="0" 
    max="60" />;



*/