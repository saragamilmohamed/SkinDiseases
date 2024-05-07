$('#fileup').change(function(){
//here we take the file extension and set an array of valid extensions
    var res=$('#fileup').val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
//if file is not valid we show the error icon, the red alert, and hide the submit button
    if (valid.indexOf(filext.toLowerCase())==-1){
        $( ".imgupload" ).hide("slow");
        $( ".imgupload.ok" ).hide("slow");
        $( ".imgupload.stop" ).show("slow");

        $('#namefile').css({"color":"red","font-weight":700});
        $('#namefile').html("File "+filename+" is not  pic!");

        $( "#submitbtn" ).hide();
        $( "#fakebtn" ).show();
    }else{
        //if file is valid we show the green alert and show the valid submit
        $( ".imgupload" ).hide("slow");
        $( ".imgupload.stop" ).hide("slow");
        $( ".imgupload.ok" ).show("slow");

        $('#namefile').css({"color":"green","font-weight":700});
        $('#namefile').html(filename);

        $( "#submitbtn" ).show();
        $( "#fakebtn" ).hide();
    }
});

// Done by Atef at 1:16 am 5.5.2024
// Please Search for line by line 
let addedBefore = false;
let pred = document.querySelector(".h-prediction");


function showMore(ele) {
    if (addedBefore) {
        return; // Prevent duplicate content
    }

    let parent = ele.parentElement;

    let p = document.createElement("p");

    // Depending on the content of 'pred', show appropriate tips
    let predictionText = pred.textContent.toLowerCase();

    if (predictionText.includes("acne") || predictionText.includes("rosacea")) {
        p.textContent = `Acne
        Acne is a skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It is most commonly seen in teenagers but can affect people of all ages.
        \n\n
        Types of Acne
        Comedones: Blackheads and whiteheads caused by clogged pores.
        Papules and Pustules: Red or inflamed bumps; pustules contain pus.
        Nodules and Cysts: Larger, deeper lumps that can be painful and may cause scarring.\n\n
        Causes of Acne
        Hormonal Changes: Particularly during puberty, menstruation, pregnancy, and menopause.
        Excess Oil Production: Often linked to hormonal activity.
        Bacteria: Propionibacterium acnes (P. acnes) can contribute to inflammation.
        Diet: High-glycemic foods and dairy may exacerbate acne in some individuals.
        Stress: Can increase oil production and worsen acne.\n\n
        Tips for Managing Acne
        Cleanse Gently: Use a mild, non-abrasive cleanser twice a day. Avoid scrubbing, which can irritate the skin.
        Use Acne Treatments: Products with benzoyl peroxide or salicylic acid can help clear acne.
        Moisturize: Use non-comedogenic moisturizers to prevent dryness.
        Avoid Touching Your Face: This can spread bacteria and worsen acne.
        Sun Protection: Use non-comedogenic sunscreen, as some acne treatments increase sun sensitivity.
        Seek Professional Help: If acne is severe or persistent, consult a dermatologist for prescription medications.\n\n
        Rosacea
        Rosacea is a chronic inflammatory condition that causes redness, visible blood vessels, and sometimes pimples on the face. It is more common in adults over 30.\n\n
        
        Types of Rosacea
        Erythematotelangiectatic Rosacea: Characterized by persistent redness and visible blood vessels.
        Papulopustular Rosacea: Similar to acne, with red bumps and pus-filled pimples.
        Phymatous Rosacea: Thickening of the skin, especially on the nose (rhinophyma).
        Ocular Rosacea: Affects the eyes, causing redness and irritation.\n\n
        Causes of Rosacea
        Genetics: Tends to run in families.
        Environmental Triggers: Sun exposure, spicy foods, alcohol, stress, and hot drinks.
        Demodex Mites: These microscopic mites may play a role in some cases of rosacea.\n\n
        Tips for Managing Rosacea
        Identify Triggers: Keep a diary to identify what triggers your rosacea and avoid those triggers.
        Use Gentle Skincare: Avoid harsh products and use gentle cleansers and moisturizers.
        Sun Protection: Always use a broad-spectrum sunscreen to prevent flare-ups.
        Reduce Stress: Practice relaxation techniques to minimize stress-related triggers.
        Avoid Hot Drinks and Spicy Foods: These can exacerbate rosacea symptoms.
        Seek Medical Advice: A dermatologist can prescribe topical or oral medications to manage rosacea.`;
    } else if (predictionText.includes("eczema")) {
        p.textContent = `Eczema

        Eczema, also known as atopic dermatitis, is a chronic inflammatory skin condition that can cause dry, itchy, and inflamed skin. It often starts in childhood but can affect people of all ages. Here's some information about eczema and tips for managing it.\n\n
        
        What is Eczema?
        Eczema is a group of conditions that cause inflammation, itching, and redness of the skin. Atopic dermatitis is the most common type of eczema, and it's often associated with allergies, asthma, and hay fever. Eczema can occur on any part of the body, but it's most common on the hands, feet, face, neck, and inner creases of the elbows and knees.\n\n
        
        Symptoms of Eczema
        Dry, Scaly Skin: The skin may feel rough or look flaky.
        Itching: Often intense and can lead to scratching, which worsens the condition.
        Redness and Swelling: Inflammation is a key feature of eczema.
        Crusting and Oozing: Severe eczema can lead to cracked, oozing, or crusted skin.
        Darkened Skin: Chronic scratching can lead to thickened, darkened areas of skin.\n\n
        Causes and Triggers of Eczema
        The exact cause of eczema is unknown, but it's believed to be a combination of genetic and environmental factors. Common triggers include:
        
        Irritants: Soaps, detergents, perfumes, and certain fabrics.
        Allergens: Dust mites, pet dander, pollen, and certain foods.
        Weather: Extreme temperatures, humidity, and dry air.
        Stress: Can worsen eczema in some individuals.
        Hormonal Changes: Can trigger eczema flare-ups, especially in women.\n\n
        Tips for Managing Eczema
        Moisturize Regularly: Use thick, fragrance-free moisturizers to keep skin hydrated. Apply immediately after bathing or washing hands.
        Avoid Triggers: Identify and avoid irritants and allergens that exacerbate eczema.
        Bathe Properly: Use lukewarm water and gentle, fragrance-free cleansers. Avoid hot baths and long showers.
        Wear Soft, Breathable Clothing: Choose fabrics like cotton and avoid wool or synthetic materials that can irritate the skin.
        Don't Scratch: Scratching can lead to skin damage and infection. Keep nails short and consider wearing gloves at night if needed.
        Use Medications as Prescribed: Topical corticosteroids, calcineurin inhibitors, and other medications can help manage eczema. Follow your dermatologist's advice.
        Manage Stress: Practice relaxation techniques to reduce stress, which can worsen eczema.
        Seek Professional Help: If eczema is severe or doesn't improve with over-the-counter treatments, consult a dermatologist for a comprehensive treatment plan.
        Use a Humidifier: This can help keep the air moist, especially during dry seasons.
        Consider Allergy Testing: If you suspect allergies are triggering eczema, talk to your doctor about allergy testing.`;
    } 
    else if (predictionText.includes("tinea") || predictionText.includes("ringworm")) {
        p.textContent = `Tinea Ringworm Candidiasis and Other Fungal Infections
        
        These fungal infections can affect various parts of the body, including the skin, scalp, nails, and feet. Tinea refers to fungal infections caused by dermatophytes, while candidiasis is caused by Candida species.\n\n
        
        Types of Fungal Infections
        Tinea Capitis: Affects the scalp, causing hair loss, redness, and scaling.
        Tinea Corporis: Commonly known as ringworm, characterized by circular lesions.
        Tinea Cruris: Also known as jock itch, affects the groin and inner thighs.
        Tinea Pedis: Athlete's foot, commonly affecting the feet and between the toes.
        Candidiasis: Affects moist areas of the body, such as the mouth and genitals.\n\n
        
        Symptoms of Fungal Infections
        Redness and Itching: Common symptoms of fungal infections.
        Scaly Patches: May appear circular or irregular in shape.
        Crusting and Oozing: Severe cases can cause skin cracking and oozing.\n\n
        
        Tips for Managing Fungal Infections
        Keep Skin Dry: Moisture promotes fungal growth. Use powder or absorbent socks.
        Avoid Sharing Personal Items: Towels, clothing, and shoes can spread infection.
        Wear Breathable Clothing: Cotton and breathable fabrics help prevent moisture build-up.
        Use Antifungal Medications: Topical antifungal creams or oral medications can treat infections. Consult a healthcare professional for advice.
        Maintain Good Hygiene: Wash regularly and dry skin thoroughly.
        Seek Medical Advice: If the infection persists or is severe, consult a healthcare provider for appropriate treatment.`;
    } else if (predictionText.includes("exanthems") || predictionText.includes("drug eruptions")) {
        p.textContent = `Exanthems and Drug Eruptions
        
        Exanthems refer to widespread rashes that can be caused by infections or drug reactions. Drug eruptions are skin reactions due to medication use.\n\n
        
        Causes of Exanthems and Drug Eruptions
        Viral Infections: Commonly caused by viruses like measles, rubella, or parvovirus.
        Drug Reactions: Certain medications can cause rashes as a side effect.\n\n
        
        Symptoms of Exanthems and Drug Eruptions
        Widespread Rash: Red or pink rash covering large areas of the body.
        Fever: Often accompanies exanthems due to viral infections.
        Itching: Common in drug eruptions.\n\n
        
        Tips for Managing Exanthems and Drug Eruptions
        Identify the Cause: If a drug reaction is suspected, consult a doctor immediately. Do not stop medication without medical advice.
        Avoid Irritants: Use gentle skincare products and avoid scratching.
        Hydrate: Keep the skin moisturized and drink plenty of water.
        Rest: If caused by a viral infection, rest and allow the body to recover.
        Seek Medical Help: If the rash is severe, causes difficulty breathing, or is accompanied by other alarming symptoms, seek immediate medical attention.`;
    } else if (predictionText.includes("scabies") || predictionText.includes("lyme") || predictionText.includes("infestations")) {
        p.textContent = `Scabies, Lyme Disease, and Other Infestations and Bites
        
        Scabies is a contagious skin condition caused by a mite infestation. Lyme disease is caused by ticks, and other infestations include insect bites and other parasites.\n\n
        
        Symptoms of Scabies and Infestations
        Intense Itching: Scabies and insect bites often cause severe itching.
        Rashes and Bumps: Scabies can cause pimple-like rashes, while Lyme disease may cause a bulls-eye rash.
        Visible Tracks: Scabies can leave visible tracks where mites burrow.\n\n
        
        Tips for Managing Scabies and Infestations
        Seek Medical Treatment: Scabies requires prescription treatment. Lyme disease requires antibiotics.
        Avoid Spreading: Keep bedding and clothing clean to prevent spreading.
        Use Insect Repellents: Prevent tick bites by using repellents and wearing protective clothing.
        Maintain Good Hygiene: Regularly wash clothing and bedding.
        Check for Ticks: After outdoor activities, check for ticks on your body and remove them promptly.`;
    } else if (predictionText.includes("vasculitis")) {
        p.textContent = `Vasculitis
        
        Vasculitis refers to inflammation of the blood vessels, which can affect any part of the body. It can be caused by autoimmune diseases, infections, or drug reactions.\n\n
        
        Symptoms of Vasculitis
        Fever and Fatigue: Common symptoms of inflammation.
        Rash and Redness: Inflammation in the blood vessels can cause a skin rash.
        Joint Pain: Some types of vasculitis can cause joint pain and swelling.\n\n
        
        Tips for Managing Vasculitis
        Seek Medical Advice: Vasculitis requires medical evaluation and treatment. Consult a healthcare professional for diagnosis and management.
        Follow Treatment Plans: Use medications as prescribed to manage inflammation.
        Monitor Symptoms: Keep track of symptoms and report changes to your healthcare provider.
        Practice Healthy Lifestyle Habits: Maintain a balanced diet and regular exercise to support overall health.
        Manage Stress: Practice relaxation techniques to reduce stress, which can worsen inflammation.`;
    } else {
        p.textContent = "Information on common skin conditions is not available.";
    }

    parent.appendChild(p); // Append the paragraph to the parent element
    addedBefore = true; // Avoid adding more than once
}
