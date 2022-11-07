import React from 'react';

function init(initialState) {
	const state = {
		...initialState,
	};

	return state;
}

function createMapping(settings) {
	const mapping = {
		global: [],
		local: ['-c:v', 'mpeg4_cuvid'],
	};

	return mapping;
}

function Coder(props) {
	const settings = init(props.settings);

	const handleChange = (newSettings) => {
		let automatic = false;
		if (!newSettings) {
			newSettings = settings;
			automatic = true;
		}

		props.onChange(newSettings, createMapping(newSettings), automatic);
	};

	React.useEffect(() => {
		handleChange(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
}

Coder.defaultProps = {
	stream: {},
	settings: {},
	skills: {},
	onChange: function (settings, mapping) {},
};

const coder = 'mpeg4_cuvid';
const name = 'MPEG4 (CUVID)';
const codecs = ['mpeg4'];
const type = 'video';
const hwaccel = true;

function defaults() {
	const settings = init({});

	return {
		settings: settings,
		mapping: createMapping(settings),
	};
}

export { coder, name, codecs, type, hwaccel, defaults, Coder as component };
