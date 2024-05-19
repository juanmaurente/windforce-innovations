import { Key } from 'react';

export interface Card {
	id: Key | null | undefined;
	title: string;
	description: string;
	siteLink: string | null;
	imgLink: string;
}
