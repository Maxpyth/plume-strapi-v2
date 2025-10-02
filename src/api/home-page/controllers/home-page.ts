import { factories } from '@strapi/strapi';


export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async deep(ctx) {

    const schema = strapi.contentTypes['api::home-page.home-page'];

    // Construire automatiquement la liste des blocs à populate
    const populate: Record<string, any> = {};
    for (const [key, attr] of Object.entries(schema.attributes)) {
      // @ts-ignore
      if (attr.type === 'component' || attr.type === 'dynamiczone' || attr.type === 'media') {
        // Pour component/dynamiczone on peuplera tout
        populate[key] = { populate: '*' };
      }
    }
    // Merge avec ctx.query pour garder les filtres, sort, pagination
    const query = {
      ...ctx.query,
      populate,
    };

    // Appeler super.find avec populate automatique
    const data = await super.find({ ...ctx, query });

    return data;

  },
}));
