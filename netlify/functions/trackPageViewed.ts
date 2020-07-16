import Airtable from 'airtable';

// Watch the data at https://airtable.com/invite/l?inviteId=inve1Ui0j3bOYrOJc&inviteToken=8460aa4c90c33dde240dc7f21d19ce25569d092b0eba3382340dffb888e5d6e8
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base('appMiBqG69pVI8YtQ');

export const handler = async () => {
  if (process.env.NODE_ENV !== 'production') {
    return { statusCode: 204 };
  }

  return base('PageViewed')
    .create({})
    .then((createdRecord) => ({
      statusCode: 200,
      body: JSON.stringify({ msg: { id: createdRecord.id } }),
    }))
    .catch((error) => {
      console.log(error);

      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    });
};
