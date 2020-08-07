patch `scratch-gui/src/lib/libraries/extensions/index.jsx`


import jsonImage from './json/json.png';
import lassImage from './lass/lass.png';
import iftttImage from './ifttt/ifttt.png';
import thingspeakImage from './thingspeak/thingspeak.png';

import voicetotextImage from './voicetotext/voicetotext.png';
import voicetotextInsetIconURL from './voicetotext/voicetotext.svg';
import urltxtImage from './urltxt/urltxt.png';
import urltxtInsetIconURL from './urltxt/urltxt.svg';
import rwGoogleImage from './rwgoogle/rwgoogle.png';
import rwGoogleInsetIconURL from './rwgoogle/rwgoogle.svg';


    {
	name: 'JSON',
    	extensionId: 'gasoJSON',
    	collaborator: 'gasolin',
    	iconURL: jsonImage,
    	insetIconURL: onegpioRpiInsetIconURL,
    	description: (
        	<FormattedMessage
            	defaultMessage="Fetch JSON."
            	description="Fetch JSON extension"
            	id="gui.extension.gasojson.description"
        	/>
    	),
    	featured: true,
    	disabled: false,
    	// bluetoothRequired: false,
    	internetConnectionRequired: true,
    	// launchPeripheralConnectionFlow: false,
    	useAutoScan: false,
    	helpLink: 'https://github.com/gasolin/scratch3-internet'
    },
    {
    	name: 'IFTTT',
	extensionId: 'gasoIFTTT',
	collaborator: 'gasolin',
	iconURL: iftttImage,
	insetIconURL: onegpioRpiInsetIconURL,
	description: (
            <FormattedMessage
                defaultMessage="IFTTT Webhook"
                description="IFTTT Webhook extension"
                id="gui.extension.gasoifttt.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: false,
        internetConnectionRequired: true,
        // launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        helpLink: 'https://github.com/gasolin/scratch3-internet'
    },
    {
  	name: 'LASS',
	extensionId: 'gasoLASS',
	collaborator: 'gasolin',
	iconURL: lassImage,
	insetIconURL: gdxforInsetIconURL,
	description: (
            <FormattedMessage
                defaultMessage="Fetch LASS."
                description="Fetch LASS extension"
                id="gui.extension.gasolass.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: false,
        internetConnectionRequired: true,
        // launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        helpLink: 'https://github.com/gasolin/scratch3-internet'
    },
    {
	name: 'ThingSpeak',
	extensionId: 'gasoThingSpeak',
	collaborator: 'gasolin',
	iconURL: thingspeakImage,
	insetIconURL: gdxforInsetIconURL,
	description: (
            <FormattedMessage
                defaultMessage="ThingSpeak"
                description="ThingSpeak extension"
                id="gui.extension.gasothingspeak.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: false,
        internetConnectionRequired: true,
        // launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        helpLink: 'https://github.com/gasolin/scratch3-internet'
    },
    {
	name: 'urlTXT',
	extensionId: 'urlTXT',
	collaborator: 'estea chen',
	iconURL: urltxtImage,
	insetIconURL: urltxtInsetIconURL,
	description: (
            <FormattedMessage
                defaultMessage="urlTXT"
                description="get url text data extension"
                id="gui.extension.urltxt.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: false,
        internetConnectionRequired: true,
        // launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        helpLink: 'https://github.com/estea8968/scratch3-internet'
    },
    {
	name: 'rwGoogle',
	extensionId: 'rwGoogle',
	collaborator: 'estea chen',
	iconURL: rwGoogleImage,
	insetIconURL: rwGoogleInsetIconURL,
	description: (
            <FormattedMessage
                defaultMessage="rwGoogle"
                description="read write google sheets extension"
                id="gui.extension.rwgoogle.description"
            />
        ),
        featured: true,
        disabled: false,
        // bluetoothRequired: false,
        internetConnectionRequired: true,
        // launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        helpLink: 'https://github.com/estea8968/scratch3-internet'
    }

