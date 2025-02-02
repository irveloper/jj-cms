import type { Schema, Struct } from '@strapi/strapi';

export interface UiHeading extends Struct.ComponentSchema {
  collectionName: 'components_ui_headings';
  info: {
    displayName: 'Heading';
    icon: 'strikeThrough';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_ui_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: 'cast';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.links', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiLinks extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    description: '';
    displayName: 'links';
    icon: 'attachment';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ui.heading': UiHeading;
      'ui.hero-banner': UiHeroBanner;
      'ui.links': UiLinks;
    }
  }
}
