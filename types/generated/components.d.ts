import type { Schema, Struct } from '@strapi/strapi';

export interface PlumeCoordonnees extends Struct.ComponentSchema {
  collectionName: 'components_plume_coordonnees';
  info: {
    displayName: 'coordonn\u00E9es';
  };
  attributes: {
    details: Schema.Attribute.Blocks;
    email: Schema.Attribute.Email;
    fonce: Schema.Attribute.Boolean;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    lien_instagram: Schema.Attribute.String;
    Nom: Schema.Attribute.String;
    telephone: Schema.Attribute.String;
    text_boutton: Schema.Attribute.String;
    Titre: Schema.Attribute.String;
    titre_compte_instagram: Schema.Attribute.String;
  };
}

export interface PlumeHeroHeaderHome extends Struct.ComponentSchema {
  collectionName: 'components_plume_hero_header_homes';
  info: {
    displayName: 'hero_header_home';
  };
  attributes: {
    Image_home: Schema.Attribute.Media<'images' | 'files'>;
    Sous_titre_mobile: Schema.Attribute.String;
    Sous_titre_ordinateur: Schema.Attribute.String;
    Titre_mobile: Schema.Attribute.String;
    Titre_ordinateur: Schema.Attribute.String;
  };
}

export interface PlumeSection extends Struct.ComponentSchema {
  collectionName: 'components_plume_sections';
  info: {
    displayName: 'Section';
    icon: 'rocket';
  };
  attributes: {
    Couleur_de_fond: Schema.Attribute.Enumeration<['fonc\u00E9', 'clair']>;
    mediasection: Schema.Attribute.Component<'shared.media', true>;
    Titre: Schema.Attribute.String;
  };
}

export interface PlumeSectionHomeAccomp extends Struct.ComponentSchema {
  collectionName: 'components_plume_section_home_accomps';
  info: {
    displayName: 'section_home_accomp';
  };
  attributes: {
    img_1: Schema.Attribute.Media<'images' | 'files'>;
    img_2: Schema.Attribute.Media<'images' | 'files'>;
    img_3: Schema.Attribute.Media<'images' | 'files'>;
    img_ord: Schema.Attribute.Media<'images' | 'files'>;
    Texte_img_1: Schema.Attribute.Text;
    Texte_img_2: Schema.Attribute.Text;
    Titre: Schema.Attribute.String;
    Titre_img_1: Schema.Attribute.String;
    Titre_img_2: Schema.Attribute.String;
    Titre_img_3: Schema.Attribute.String;
  };
}

export interface PlumeSectionHomeQuit extends Struct.ComponentSchema {
  collectionName: 'components_plume_section_home_quits';
  info: {
    displayName: 'section_home_quit';
  };
  attributes: {
    img_1: Schema.Attribute.Media<'images' | 'files'>;
    img_2: Schema.Attribute.Media<'images' | 'files'>;
    Paragraphe_img1: Schema.Attribute.Text;
    Paragraphe_img2: Schema.Attribute.Text;
    text_btn_img_1: Schema.Attribute.String;
    text_btn_img_2: Schema.Attribute.String;
    Titre: Schema.Attribute.String;
    Titre_img_1: Schema.Attribute.String;
    Titre_img_2: Schema.Attribute.String;
  };
}

export interface PlumeSectionHomeSlider extends Struct.ComponentSchema {
  collectionName: 'components_plume_section_home_sliders';
  info: {
    displayName: 'section_home_slider';
  };
  attributes: {
    img_1: Schema.Attribute.Media<'images' | 'files'>;
    img_2: Schema.Attribute.Media<'images' | 'files'>;
    img_3: Schema.Attribute.Media<'images' | 'files'>;
    img_4: Schema.Attribute.Media<'images' | 'files'>;
    img_5: Schema.Attribute.Media<'images' | 'files'>;
    Titre: Schema.Attribute.String;
    Titre_img_1: Schema.Attribute.String;
    Titre_img_2: Schema.Attribute.String;
    Titre_img_3: Schema.Attribute.String;
    Titre_img_4: Schema.Attribute.String;
    Titre_img_5: Schema.Attribute.String;
  };
}

export interface PlumeSectionPlume extends Struct.ComponentSchema {
  collectionName: 'components_plume_section_plumes';
  info: {
    displayName: 'Section_plume';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    richtextsection: Schema.Attribute.Component<'shared.rich-text', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'plume.coordonnees': PlumeCoordonnees;
      'plume.hero-header-home': PlumeHeroHeaderHome;
      'plume.section': PlumeSection;
      'plume.section-home-accomp': PlumeSectionHomeAccomp;
      'plume.section-home-quit': PlumeSectionHomeQuit;
      'plume.section-home-slider': PlumeSectionHomeSlider;
      'plume.section-plume': PlumeSectionPlume;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
