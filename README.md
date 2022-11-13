# ExploreLah!

ExploreLah! is an all-in-one trip planner platform helping tourists by creating a curated itinerary to explore around Singapore.

## Requirement

- Node 16.15.0

## Tools Used

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [SCSS](https://sass-lang.com/)

## Beyond The Lab

- [Pinia](https://pinia.vuejs.org/introduction.html)
- [Github](https://github.com/)
- [Firebase](https://firebase.google.com/)
- [LottieFiles](https://lottiefiles.com/)

# Description

## Vue

We used `VUE3 cli` for this project. Some notable portions were the use of

- VUE Routers
- VUE Lifecycle Hooks, esp mounted(), setup()

We also refactor code that was reused in multiple places into `components` and imported them where needed to streamline the application.

## Bootstrap

We made full use of the `12-point grid system` to help make our application responsive. Beyond using the provided classes, we also extended `Bootstrap` using `main.scss` to create and use a theme for our website.

# Beyond the Lab

## Github

We created a `repo` and made full use of the versioning and collaboration function.

## Pinia and localStorage

We used `VUE's` offical state management library `Pinia` for global state management across our application. We also incorporated browser's `localStorage` where appropriate.

This allowed us to persist information when routing through different views and through refresh.

## Firebase and Firestore

We used `Firebase` to provide authentication while `Firestore` to provide CRUD functionality. We implemented `Firebase onSnapshot()` method to listen and retrieve data whenever there was an update on the `Firestore`

## Animation Libraries

We used `Lottiefiles` and `Vueuse motion` to allow us to have scroll animations and incorporate lightweight SVG animation files. In addition, we created `skeleton loaders` for the pages that required an `asynchronous operation` with either our backend or database.

## Download as PDF

We implemented the capability to download the generated itinerary as a `PDF` using the `PDFMake` library.

# Project Setup

### Access project folder and and download dependencies

```sh
cd ExchangeLah
npm install
```

### Start Project in Development Environment

```sh
npm run dev
```

# Backend

For this project, we incorporated and even build our own API. The main APIs we incoporated were

- GoogleMapPlaces for GoogleMaps
- GoogleDetails for additional information
- OpenWeatherAPI for weather forecast

In addition, we built a `Flask` application that we deployed onto `Google Cloud Platform's App Engine`. This application can be accessed through [here](https://wad2-explorelah.as.r.appspot.com/). `POST` requests to this endpoint returns a `JSON` response that is parsed and used in our application.

The application also has a separate endpoint that returns a list of all valid locations that can be used to search. That endpoint can be accesse [here](https://wad2-explorelah.as.r.appspot.com/validlocations).

An example `POST` request is

```
{
    "byCar": true,
    "name": "Gengar",
    "startLoc": "CHIJMES",
    "day": "Fri",
    "dur": 3,
    "pref": {
        "shop": 0,
        "arts": 0,
        "outdoor": 0,
        "adventure": 5,
        "nightlife": 0
    },
    "date": ["test", "test"]
}
```

An example `JSON` response is:

```
{
    "details": {
        "0": [
            {
                "ChIJNfw8b6QZ2jEREbGYft7-Q4A": {
                    "html_attributions": [],
                    "result": {
                        "formatted_address": "30 Victoria St, Singapore 187996",
                        "name": "CHIJMES",
                        "opening_hours": {
                            "open_now": true,
                            "periods": [
                                {
                                    "open": {
                                        "day": 0,
                                        "time": "0000"
                                    }
                                }
                            ],
                            "weekday_text": [
                                "Monday: Open 24 hours",
                                "Tuesday: Open 24 hours",
                                "Wednesday: Open 24 hours",
                                "Thursday: Open 24 hours",
                                "Friday: Open 24 hours",
                                "Saturday: Open 24 hours",
                                "Sunday: Open 24 hours"
                            ]
                        },
                        "photos": [
                            {
                                "height": 4032,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/117837091907716140096\">Aakash Sharma</a>"
                                ],
                                "photo_reference": "AW30NDxjV4_j8MnG3_yq3KLRztlAZpF6e-RxbFY1nvYpmJHtC7F1i_MftjzaaLm8Ba8Ar-OBZm4tZ60OHY1ccDwBTJrv5jcgrootm28y2MCgkkvx3SNjD8-_px8AD-vkASPxqIyDf5ORc7413zxsgqgRcvCIjRWPQVF2Gb37rU_zi6myFKKW",
                                "width": 3024
                            },
                            {
                                "height": 4032,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/116270910535153599549\">PING</a>"
                                ],
                                "photo_reference": "AW30NDzRMCz2E24WNe5uErBg8KGc9hqe3MZbbJ3GImN6uSYwzFbaU1Ve2kLjjbMExHA7eUslslQa2PMaJUFYezIvcJ4EK5Pa_YMKjE2D_qM5sCVc4minsUC5BP12SO9AodoF_q_GDL1grSTxobw5ZWTdKhd0RVeEHuAItQRHd_R2mGw75pUS",
                                "width": 3024
                            },
                            {
                                "height": 1681,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/111799061687427263257\">郭永紀 Asaph Kuo</a>"
                                ],
                                "photo_reference": "AW30NDzkTiHAsD6Xxtf1MoVwWJIaaE9WdL3xSd2uwyEpR0GxBBHOPFfilGqGWhvAiG3EzDhtgKNUa7ZWPp65Uzl88wYnArM7b_BTzMW3zVBbLbfHXqZs4Vu5L2poA0od36dlBu9qbNkeQm60Oeb4RQuNJVDbfmmkR3CivFjnnP9rwIKGyBsm",
                                "width": 2334
                            },
                            {
                                "height": 1536,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/106603683095480910906\">Steve Matthew Evans</a>"
                                ],
                                "photo_reference": "AW30NDwehIb1uXy5vkaYJxlLdxDJDKbyIc9a-PN33Mb9ZyXtjFFKJuCjq2lZCu2Wej8RU18G3UHhhllLwwhnjDryDtBME3fQ52jyViRQzDjhHxbmzRgzfpN7-40DpYarkdkO5aITHQeCk4gNXTN4EYk8ZoA4gDzl60uIgy6WOkU0zozARRQ",
                                "width": 2048
                            },
                            {
                                "height": 3013,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/108451542267210521115\">Roy Tan</a>"
                                ],
                                "photo_reference": "AW30NDz6pLCrZCG0guWceZCOY89pc7WlO5xhr9lgrFyygDSlkZ2DMKnoZJEcm95Vx6392eZF41aGvoWwPfSqHMuNG1tqT2aB32yJdu11cMt0NuQTVzFjkWjjnq5Y2_j65VFrpKo_mTOjL7rHpH0PGCjISoxKihDBICB2FxnJXqMf4hMW0KiL",
                                "width": 2009
                            },
                            {
                                "height": 3648,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/110193693662941706625\">Bird Chen</a>"
                                ],
                                "photo_reference": "AW30NDwgLy-i0A3pK6tYN5PUBpf6SUZIAn3v95O7ll6F0bF0k0ETy8axemVPGCwaLg6TeIRy5yh8jeuz3ntyWJ8uLCjBH04VYBE3qeptOkaLRn9pxr758WPpksub4vH2jiNESpYFdJKlXQ7DcZKFehgO41_no-fQwJLgc3nm1B0vzbHIbKw9",
                                "width": 5472
                            },
                            {
                                "height": 4080,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/103333186561627890722\">Dr Manish Nagpal</a>"
                                ],
                                "photo_reference": "AW30NDxCyi3F8_YvzPoIuj-cXSXtLlvQHBHqFqQAISQBT5GCaOmkLnG-vmqf1DtNw59Mj9It8tWyN6inkMrVSqzE-v-6k_dKjQaXxiST56rr7Npg_vrYin0bFXdtsNjvx5XGm8wR_Bm0AdMN9pCSSqn23B6MDs1bnPdrQoLNRKrwBuCniHa8",
                                "width": 3072
                            },
                            {
                                "height": 4032,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/117378283701184272926\">KMYeen</a>"
                                ],
                                "photo_reference": "AW30NDx3xxmPs3kAxjFJ7jf41P-ASsCVSCCHwWZDCuUbGvRGdnA0AXBGhJT_n3oWujl_zdQMujWltQ3P2b1sYzL7YgAd7oxADoVRL4Z7AJrhxMyEuHPXWRS0Gj0EeO8l2yXbmM7uAITiW0uU2cDatXAi0KJ0NPS3ylskdt8-TU_fCO5STfl2",
                                "width": 3024
                            },
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/110690368702672681154\">Anthony Ng</a>"
                                ],
                                "photo_reference": "AW30NDxu_OQxDy4TkQ6QOBFjNbJZyuUsm0aNszJPsqB-4IHBWxugluI-ZJTk09LuxN6QE5DpQqN6QENHHQwPkt_WKdX5qh5gEHNIHhzEg0I6EvK9DsUsy8ouldwvPmghopjRGkrWnrZ_tELNJjKWSMOnKYn0rpB-Lstv8pUQPK-THDFJWd9E",
                                "width": 4032
                            },
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/105718757710706099254\">Karen Olliver</a>"
                                ],
                                "photo_reference": "AW30NDzsSBbdivm_EnNaq4t3JilZUug-4YY-QLQcXdORhVP8jBRgaSdCxKdVblc_xSFBvB_5zJ60CRGBDsJeaYaAm0MO-zrkG9L3QcTJPpMb9tgQ0R4yMat_mC1alEkZP2naDExwiiQ1C_S-XOoPRUcMKBL05YTA0hqII9ScimUgndIumuRs",
                                "width": 4032
                            }
                        ],
                        "rating": 4.5
                    },
                    "status": "OK"
                }
            },
            {
                "ChIJyQfG_rAZ2jER6Yr2-WKP3mc": {
                    "html_attributions": [],
                    "result": {
                        "formatted_address": "Haji Ln, Singapore",
                        "name": "Haji Lane"
                    },
                    "status": "OK"
                }
            },
            {
                "ChIJ56v4fG8X2jER4AfyHEtEV8M": {
                    "html_attributions": [],
                    "result": {
                        "formatted_address": "75 Lor. 5 Toa Payoh, Singapore 310075",
                        "name": "75 Lor. 5 Toa Payoh",
                        "photos": [
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/116170679892231179856\">Jasmine Adams</a>"
                                ],
                                "photo_reference": "AW30NDzmhZd0p31DtutwUViWoNQ0L4r-drYmfGblifowqMt6bOlnh_lPpZGqf3AA4qnwlchqAPOA4HhadTWgLX7iKqgPJLUgJ2N6pCcS9azsnzLGs_CsFPvwqlHxCfI3VmMmWuHlyytM4H9fSMmAvG_GltcmpU41Vt2eur_IV4--PfRayMGU",
                                "width": 4032
                            },
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/116170679892231179856\">Jasmine Adams</a>"
                                ],
                                "photo_reference": "AW30NDxWQyfoTxhbzzFDFDK0oSh_uTD0MwWvIDwj4mfsEXUruImwFXCKQcLsifkv_-ZuvlZJ3KBCHfA3AnThbI4oFlKVNNlb1YPvnrpI_LaNhEM_sNQ9QMLnOoUWtYJCpbjVQ5Eiu56Ld5hu1XA6FfcQ8AqBBvwgd5jmLGU18ZC3b6v5dwtt",
                                "width": 4032
                            }
                        ]
                    },
                    "status": "OK"
                }
            },
            {
                "ChIJ1wK06hEa2jERLuScsniK4PM": {
                    "html_attributions": [],
                    "result": {
                        "formatted_address": "7 Empress Rd, Singapore 260007",
                        "name": "7 Empress Rd",
                        "photos": [
                            {
                                "height": 3096,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/116495992746370870847\">cse1217</a>"
                                ],
                                "photo_reference": "AW30NDy0QW4wheENgQh5a31iT8AHnxf6IWZBuS8dM97XwbwapTU7ZeaXEeMGhGU_ZNoYvj4r-KVEQKwThPVc23-rNZTJapW5W1bS-fDoV8aPaWhrztdC8Yi2I2VE2vigLZuVfLQGhDIFBweHq58xzu7gZ-GF6bObqdERtorkW52_Rv5px9eK",
                                "width": 4128
                            }
                        ]
                    },
                    "status": "OK"
                }
            },
            {
                "ChIJQfAL2JYZ2jER9v06BxkNw1k": {
                    "html_attributions": [],
                    "result": {
                        "formatted_address": "181 Orchard Rd, Singapore 238896",
                        "name": "Orchard Central",
                        "opening_hours": {
                            "open_now": false,
                            "periods": [
                                {
                                    "close": {
                                        "day": 0,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 0,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 1,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 1,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 2,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 2,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 3,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 3,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 4,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 4,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 5,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 5,
                                        "time": "1100"
                                    }
                                },
                                {
                                    "close": {
                                        "day": 6,
                                        "time": "2200"
                                    },
                                    "open": {
                                        "day": 6,
                                        "time": "1100"
                                    }
                                }
                            ],
                            "weekday_text": [
                                "Monday: 11:00 AM – 10:00 PM",
                                "Tuesday: 11:00 AM – 10:00 PM",
                                "Wednesday: 11:00 AM – 10:00 PM",
                                "Thursday: 11:00 AM – 10:00 PM",
                                "Friday: 11:00 AM – 10:00 PM",
                                "Saturday: 11:00 AM – 10:00 PM",
                                "Sunday: 11:00 AM – 10:00 PM"
                            ]
                        },
                        "photos": [
                            {
                                "height": 1472,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/114728727124056066403\">HOCK SOON NG</a>"
                                ],
                                "photo_reference": "AW30NDzG8Y6f8HpZjXRhWiJjRSCyWBI0NJfdibF_jOIHhhBzJsvbWiyPTeAvta6OMAjA_74t3VyZ7CDf12EqXyRcihMcKuZ-XNAQIs6gbdFMXJ0alYqJOfzq4HejQy-Uxw-_gOCqOQ5FcGzdMzTfrIu2_M98udRCWKKTQ8llvP0wMiPy9XsY",
                                "width": 3264
                            },
                            {
                                "height": 3000,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/106072377229332759966\">MyPom Music นานาวิถี of life.</a>"
                                ],
                                "photo_reference": "AW30NDw9AJKj5Nv9Ds9pVRcRuYjdQGmGZ3NQE1OSx6ES4-ota4UNeevlOZ2eNnPN4z35E1zTh7io0JI39rgNJ25ndLOdVtYNWFLNlJY5LqVkOZOzsi3tfsDCdV0ruHM5K8Md61XwCp5-AqRCIONKDuX7qJPnHUwHzymFXcSk559OtqddjJdg",
                                "width": 4000
                            },
                            {
                                "height": 3024,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/117553835180250865360\">McYLLe</a>"
                                ],
                                "photo_reference": "AW30NDxYB-v4ZhjYRDYzHvG0qKvoKbh3s2GPq78klwyKxIlbhFnhfjr6p3RhYuOl8t_xGSz1iA9iCMDAAhM7ZQLhofzFpGDFDYbnI3dxKRcVZHccKQHIjEK01xdnhABXJO54mJmve2YgLxHFXkrNDPc2F1mNFtQPerrsLj7GQK9K0V1jrj-i",
                                "width": 4032
                            },
                            {
                                "height": 2304,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/102589264297081734119\">CHIE SUZUKI</a>"
                                ],
                                "photo_reference": "AW30NDwD1ypdDjCeNnCymT5Ydz0USIClkhLKhU_B3u17xW4k1SBcoMaa5qELrZPPsF76Ot3Uq3bzuTbFOpvOZMiLFqCbopw8AlEUQ2w54fqW-6Lt-_RgQealCdNe0Tt3wZVJJV8Wey5yCTzuMMELK6wVgBV1fvAXUCxNjOyjq0fUpK2zGUIn",
                                "width": 4096
                            },
                            {
                                "height": 4032,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/101688820356272715528\">thiang cheryl</a>"
                                ],
                                "photo_reference": "AW30NDxT3tTaKJyUmibtKYgdO_WVuI0hB6iQwsciBdIqxGv8Q6yQtdaJ61PjGOYTEpfdC6coyCNb8TvyiLnvRoKKgS_vyT_kdx_xs1e9wyihGG2bkdM3PkWgrT6JKjT2-Fv09v3-mwM2t9pJvdwBR4umwktUz0G6iME1Kh71db1V_HIO-OXQ",
                                "width": 3024
                            },
                            {
                                "height": 3472,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/103604683412383561144\">Kenneth Low</a>"
                                ],
                                "photo_reference": "AW30NDyIxB213BiyfH6qv-SHO3bc7O7mNRciHgf4AEmZdgkZONEg-HXX5xTJNQxU8VDKI_3VhWLFCza4kMEr6MT_6mbnc2X-cNEZokX-quUXS6Fo8RFWowKYcpGyloH0fh9o0uCm4XCHvr4fCMdVouZn62zK6FDTJmbPy3ZNXOc55flcMJfP",
                                "width": 4640
                            },
                            {
                                "height": 1816,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/116284563034996840103\">Simon Shaw</a>"
                                ],
                                "photo_reference": "AW30NDxClqyKimeD4-RanmRsWUwjd7MdEMN-6IFBZueZ0UgWTEare9LeAw1RCvrplnZIHNu_--OxRpcZIaQS3NEP3QTRLJVse_b1c0PVaag6ZQ0AZJKyVYB0XLp1EOMM2q2fvPQthyhcRs4RlyaYAOCdu3-KB6lvsrcbPy-RczJdMYu5MFxn",
                                "width": 4032
                            },
                            {
                                "height": 2322,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/110790667077488776909\">Linda Lau</a>"
                                ],
                                "photo_reference": "AW30NDykxH4q6hWN9HE1rOsq9fSHSVlKUFJcBuQlcot8XdIMZHsDYgyHrXGcKW9xUPvRbCTGzie5W9UZQSG3sj3zyykrds0LU6pEzxTQwrJgU-M9xG9YLs6cUIudZCXsRbAdi-kRLN-H09xF_DJl4L1eoqMFHb6v5MKoAtSdbyEFQyHYevr7",
                                "width": 4128
                            },
                            {
                                "height": 4032,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/113648724863297337201\">Sandton Guide South africa</a>"
                                ],
                                "photo_reference": "AW30NDxLhO21NSc327PAlCYBamP08ULnC3TN2ufEJmJ98FJbyjgwVeYQj3zCWfdcjNd77gDt5hF_TRbst4fOAPXs1o2zvOYoIe2MW-rPmqUA2YXOLBfYIERXGfea1-iNV7E1UyrmdEQbyOVR3vDKYJyODVmkWS8kPzMlFv9LS7v9Uwff1x3p",
                                "width": 3024
                            },
                            {
                                "height": 871,
                                "html_attributions": [
                                    "<a href=\"https://maps.google.com/maps/contrib/114520501314404177965\">H2 O</a>"
                                ],
                                "photo_reference": "AW30NDwhourRzf8Y68aHzrdRuUObHFDVltSdzot6Q0GkRtr4rjygJT4qEPCDDrsUYh1pHV5_7x7eCJ1j3NqyTeLdTqWdaiYjE5JhOgR5Lzqr52n40mxJ87FzlI4LaIy1ciBVFp4EDwodvfH_yIP6L3G3UEdTbHZs7VRnc7yic7c3FJuF_cg",
                                "width": 1549
                            }
                        ],
                        "rating": 4.3
                    },
                    "status": "OK"
                }
            }
        ]
    },
    "foodReco": {
        "0": {
            "dinner": {
                "75 Lor. 5 Toa Payoh": [
                    [
                        "People's Park Food Centre",
                        15.0
                    ],
                    [
                        "448",
                        30.0
                    ],
                    [
                        "11 Telok Blangah Cres",
                        30.0
                    ]
                ],
                "Haji Ln": [
                    [
                        "Ci Yuan Hawker Centre",
                        30.0
                    ],
                    [
                        "84 Marine Parade Central Market and Food Centre",
                        15.0
                    ],
                    [
                        "137 Tampines St. 11",
                        30.0
                    ]
                ]
            },
            "dinnerPin": [
                {
                    "lat": 1.2849976,
                    "lng": 103.8425556
                },
                {
                    "lat": 1.3133068,
                    "lng": 103.76449
                },
                {
                    "lat": 1.277457,
                    "lng": 103.8186374
                },
                {
                    "lat": 1.3755523,
                    "lng": 103.8829513
                },
                {
                    "lat": 1.3023792,
                    "lng": 103.906311
                },
                {
                    "lat": 1.3454824,
                    "lng": 103.9447584
                }
            ],
            "lunch": {
                "CHIJMES": [
                    [
                        "6 Tanjong Pagar Plaza",
                        15.0
                    ],
                    [
                        "159 Mei Chin Rd",
                        15.0
                    ],
                    [
                        "Far East Plaza",
                        15.0
                    ]
                ]
            },
            "lunchPin": [
                {
                    "lat": 1.2766945,
                    "lng": 103.8431415
                },
                {
                    "lat": 1.2932672,
                    "lng": 103.8028827
                },
                {
                    "lat": 1.3071502,
                    "lng": 103.8337132
                }
            ]
        }
    },
    "itinerary": "[{\"itinerary\": [{\"placeID\": \"ChIJNfw8b6QZ2jEREbGYft7-Q4A\", \"name\": \"CHIJMES\", \"arriveTime\": 1015, \"waitTime\": 0, \"endTime\": 1415, \"dur\": 4, \"travelTimeTo\": 15, \"score\": 1.01, \"status\": \"Clear\", \"tags\": [\"Food\", \"Night Life\"], \"order\": 0}, {\"placeID\": \"ChIJyQfG_rAZ2jER6Yr2-WKP3mc\", \"name\": \"Haji Ln\", \"arriveTime\": 1430, \"waitTime\": 0, \"endTime\": 1830, \"dur\": 4, \"travelTimeTo\": 15, \"score\": 1.03, \"status\": \"Rain\", \"tags\": [\"Shopping\", \"Food\", \"Night Life\", \"Arts & Culture\"], \"order\": 1}, {\"placeID\": \"ChIJ56v4fG8X2jER4AfyHEtEV8M\", \"name\": \"75 Lor. 5 Toa Payoh\", \"arriveTime\": 1845, \"waitTime\": 0, \"endTime\": 1945, \"dur\": 1, \"travelTimeTo\": 15, \"score\": 1.0, \"status\": \"Rain\", \"tags\": [\"Food\"], \"order\": 2}, {\"placeID\": \"ChIJ1wK06hEa2jERLuScsniK4PM\", \"name\": \"7 Empress Rd\", \"arriveTime\": 2000, \"waitTime\": 0, \"endTime\": 2100, \"dur\": 1, \"travelTimeTo\": 15, \"score\": 1.0, \"status\": \"Rain\", \"tags\": [\"Food\"], \"order\": 3}, {\"placeID\": \"ChIJQfAL2JYZ2jER9v06BxkNw1k\", \"name\": \"Orchard Central\", \"arriveTime\": 2115, \"waitTime\": 0, \"endTime\": 2515, \"dur\": 4, \"travelTimeTo\": 15, \"score\": 1.0, \"status\": \"Rain\", \"tags\": [\"Shopping\", \"Food\", \"Night Life\"], \"order\": 4}], \"dayNo\": 0, \"day\": \"Fri\", \"pinInfoList\": [[\"CHIJMES\", 1.2951699, 103.8521957], [\"Haji Ln\", 1.3009789, 103.8589275], [\"75 Lor. 5 Toa Payoh\", 1.3359699, 103.8530114], [\"7 Empress Rd\", 1.3163893, 103.8057652], [\"Orchard Central\", 1.3006295, 103.8398742]]}]",
    "user": {
        "byCar": false,
        "dates": [
            "test",
            "test"
        ],
        "day": "Fri",
        "dur": 1,
        "name": "Gengar",
        "pinInfo": {
            "lat": 1.2951699,
            "lng": 103.8521957
        },
        "pref": {
            "adventure": 5,
            "arts": 0,
            "nightlife": 0,
            "outdoor": 0,
            "shop": 0
        },
        "startLoc": "CHIJMES"
    }
}
```
