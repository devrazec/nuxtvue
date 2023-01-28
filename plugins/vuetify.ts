import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({ // Replaces new Vuetify(...)
        components,
        directives,
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,                
            }
        },
    })

    nuxtApp.vueApp.use(vuetify)
})