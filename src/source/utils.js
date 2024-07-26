const Aesthetic = [
    {
        Injection: [
            {
                "Dermal Filler Injections": [
                    { name: "Face Fillers", id: 286 },
                    { name: "Filler Dissolving", id: 317 },
                    { name: "Body Fillers", id: 58 },
                ],
            },
            {
                "Botulinum Toxin": [
                    { name: "Botox for face", id: 241 },
                    { name: "Sweat Reduction", id: 158 },
                ],
            },
            {
                "Mesotherapy Biorevitalization": [
                    { name: "Mesotherapy", id: 246 },
                    { name: "Mesobotox", id: 244 },
                    { name: "Cherry Lips", id: 323 },
                    { name: "Skinboosters", id: 245 },
                ],
            },
            {
                PRP: [
                    { name: "Hair PRP", id: 367 },
                    { name: "Face & Neck PRP", id: 368 },
                ],
            },
            {
                name: "Fat Burner injection: Lipolysis",
                id: 124,
            },
        ],
    },
    {
        Devices: [
            { name: "Genius RF Microneedling", id: 373 },
            { name: "Hollywood Spectra", id: 329 },
            { name: "Sofwave", id: 6 },
        ],
    },
    {
        "Skin treatment": [
            { name: "Acne", id: 185 },
            { name: "Pigmentation treatment", id: 371 },
            { name: "Cellulite", id: 175 },
            { name: "Tattoo removal", id: 140 },
            { name: "Stretch marks removal", id: 141 },
        ],
    },
    { name: "IV Drips", id: 18 },
    { name: "Aesthetic Doctor Consultation", id: 365 },
];

const Hardware = [
    {
        "Laser Hair Removal": [
            { name: "Men", id: 336 },
            { name: "Women", id: 337 },
        ],
    },
    {
        "Skin treatment": [
            {
                "Skin Care &amp; Facial": [
                    { name: "Mirapeel Hydrating Facial", id: 277 },
                    { name: "Dermapen Microneedling", id: 369 },
                ],
            },
            {
                Peeling: [
                    { name: "Pigmentation", id: 370 },
                    { name: "Hollywood (Carbon) Peel", id: 208 },
                ],
            },
            {
                Devices: [
                    { name: "Clarity 2", id: 372 },
                    { name: "Hollywood Spectra", id: 374 },
                    { name: "Sofwave", id: 375 },
                    { name: "Genius RF Microneedling", id: 7 },
                ],
            },
        ],
    },
    {
        PRP: [
            { name: "PRP Face & Neck", id: 326 },
            { name: "PRP Hair", id: 67 },
        ],
    },
    { name: "Hardware Cosmetology Consultation", id: 366 },
];

const Plastic = [
    {
        "Facial Surgery Consultations": [
            { name: "Face Lift", id: 191 },
            { name: "Eyelid and Peri-Orbital Surgery", id: 347 },
            { name: "Nose Surgery (Rhinoplasty)", id: 224 },
            { name: "Ear surgery (Otoplasty)", id: 216 },
        ],
    },
    {
        "Body Surgery Consultation": [
            { name: "MIA procedure for Breast", id: 255 },
            { name: "Body Contouring Consultation", id: 350 },
            { name: "Liposuction", id: 35 },
            { name: "Mommy Makeover Consultation", id: 237 },
            { name: "Breast Surgery Consultation", id: 234 },
        ],
    },
    {
        "Skin - Dermatology Surgery": [
            { name: "Lipoma Surgery", id: 355 },
            { name: "Cyst Removal", id: 164 },
            { name: "Mole Removal", id: 165 },
        ],
    },
    { name: "Post-Op Consultation", id: 345 },
];

const Dental = [
    {
        "Aesthetic Dental treatments": [
            { name: "Aligners", id: 360 },
            { name: "Whitening", id: 359 },
            { name: "Veneers", id: 361 },
            { name: "Cleansing & polishing", id: 358 },
        ],
    },
    { name: "CBCT Scan (Cone Beam CT)", id: 309 },
    { name: "Dental Consultation", id: 356 },
    { name: "Holistic Dentistry Consutlation", id: 357 },
];

const Hair = [{ name: "Doctor Consultation", id: 64 }];
export { Aesthetic, Hardware, Plastic, Dental, Hair };
