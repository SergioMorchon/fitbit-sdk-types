function mySettings() {
	return (
		<Page>
			<Section
				title={
					<Text bold align="left">
						Demo Settings
					</Text>
				}
			>
				<Toggle settingsKey="toggle" label="Toggle Switch" />
				<ColorSelect
					settingsKey="color"
					colors={[
						{ color: 'tomato' },
						{ color: 'sandybrown' },
						{ color: '#FFD700' },
						{ color: '#ADFF2F' },
						{ color: 'deepskyblue' },
						{ color: 'plum' },
					]}
				/>
				<Link source="https://www.bing.com">Bing</Link>
				<Text>Your Text Here</Text>
			</Section>
		</Page>
	);
}

registerSettingsPage(mySettings);
