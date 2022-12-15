import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginId from './pluginId';
import IconSelectIcon from './components/IconSelectIcon';
// import icons from 'i18n-iso-icons';
const icons  = []

export default {
    register(app) {
        app.customFields.register({
            name: 'icon',
            pluginId: 'icon-select',
            type: 'string',
            icon: IconSelectIcon,
            intlLabel: {
                id: 'icon-select.label',
                defaultMessage: 'Icon',
            },
            intlDescription: {
                id: 'icon-select.description',
                defaultMessage: 'Select any icon',
            },
            components: {
                Input: async () =>
                    import('./components/IconSelect'),
            },
            options: {
                advanced: [
                    {
                        sectionTitle: {
                            id: 'global.settings',
                            defaultMessage: 'Settings',
                        },
                        items: [
                            {
                                name: 'required',
                                type: 'checkbox',
                                intlLabel: {
                                    id: 'form.attribute.item.requiredField',
                                    defaultMessage: 'Required field',
                                },
                                description: {
                                    id: 'form.attribute.item.requiredField.description',
                                    defaultMessage: "You won't be able to create an entry if this field is empty",
                                },
                            },
                        ],
                    },
                ],
            },
        });
    },

    async registerTrads({ locales }) {
        const importedTrads = await Promise.all(
            locales.map((locale) => {
                return Promise.all([
                    // import(`./translations/${locale}.json`),
                    // import(`i18n-iso-icons/langs/${locale}.json`)
                    
                ])
                .then(([pluginTranslations, iconTranslations]) => {
                    //icons.registerLocale(iconTranslations.default);

                    return {
                        data: {
                            ...prefixPluginTranslations(pluginTranslations.default, pluginId),
                            // [`${pluginId}.icons`]: JSON.stringify(icons.getNames(locale)) 
                        },
                        locale,
                    };
                })
                .catch(() => {
                    return {
                        data: {},
                        locale,
                    };
                });
            })
        );
        return Promise.resolve(importedTrads);
    },
};
