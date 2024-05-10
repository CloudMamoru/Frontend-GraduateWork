export type CustomerForm = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    Year_Birth: {
        value: number;
    };
    Education: {
        value: string;
    };
    Marital_Status: {
        value: string;
    };
    Income: {
        value: number;
    };
    Kidhome: {
        value: number;
    };
    Teenhome: {
        value: number;
    };
    Dt_Customer: {
        value: string;
    };
    Recency: {
        value: number;
    };
    Complain: {
        value: number;
    };
    MntWines?: {
        value: number;
    };
    MntFruits?: {
        value: number;
    };
    MntMeatProducts?: {
        value: number;
    };
    MntFishProducts?: {
        value: number;
    };
    MntSweetProducts?: {
        value: number;
    };
    MntGoldProds?: {
        value: number;
    };
    NumDealsPurchases?: {
        value: number;
    };
    AcceptedCmp1?: {
        value: number;
    };
    AcceptedCmp2?: {
        value: number;
    };
    AcceptedCmp3?: {
        value: number;
    };
    AcceptedCmp4?: {
        value: number;
    };
    AcceptedCmp5?: {
        value: number;
    };
    Response?: {
        value: number;
    };
    NumWebPurchases?: {
        value: number;
    };
    NumCatalogPurchases?: {
        value: number;
    };
    NumStorePurchases?: {
        value: number;
    };
    NumWebVisitsMonth?: {
        value: number;
    };
}


export const CustomerFormKeys = [
	'Year_Birth',
	'Education',
	'Marital_Status',
	'Income',
	'Kidhome',
	'Teenhome',
	'Dt_Customer',
	'Recency',
	'Complain',
	'MntWines',
	'MntFruits',
	'MntMeatProducts',
	'MntFishProducts',
	'MntSweetProducts',
	'MntGoldProds',
	'NumDealsPurchases',
	'AcceptedCmp1',
	'AcceptedCmp2',
	'AcceptedCmp3',
	'AcceptedCmp4',
	'AcceptedCmp5',
	'Response',
	'NumWebPurchases',
	'NumCatalogPurchases',
	'NumStorePurchases',
	'NumWebVisitsMonth'
];