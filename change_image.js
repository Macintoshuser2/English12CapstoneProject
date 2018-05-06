window.addEventListener("load", (event) => {
    let woolImages = 
    [
        "textures/wool_colored_black.png",
        "textures/wool_colored_blue.png",
        "textures/wool_colored_brown.png",
        "textures/wool_colored_cyan.png",
        "textures/wool_colored_gray.png",
        "textures/wool_colored_green.png",
        "textures/wool_colored_light_blue.png",
        "textures/wool_colored_lime.png",
        "textures/wool_colored_magenta.png",
        "textures/wool_colored_orange.png",
        "textures/wool_colored_pink.png",
        "textures/wool_colored_purple.png",
        "textures/wool_colored_red.png",
        "textures/wool_colored_silver.png",
        "textures/wool_colored_white.png",
        "textures/wool_colored_yellow.png"
    ];

    let planksImages = 
    [
        "textures/planks_acacia.png",
        "textures/planks_big_oak.png",
        "textures/planks_birch.png",
        "textures/planks_jungle.png",
        "textures/planks_oak.png",
        "textures/planks_spruce.png"
    ];
    
    let dyeWoolImages = 
    [
        "textures/dye_powder_black.png",
        "textures/dye_powder_blue.png",
        "textures/dye_powder_brown.png",
        "textures/dye_powder_cyan.png",
        "textures/dye_powder_gray.png",
        "textures/dye_powder_green.png",
        "textures/dye_powder_light_blue.png",
        "textures/dye_powder_lime.png",
        "textures/dye_powder_magenta.png",
        "textures/dye_powder_orange.png",
        "textures/dye_powder_pink.png",
        "textures/dye_powder_purple.png",
        "textures/dye_powder_red.png",
        "textures/dye_powder_silver.png",
        "textures/dye_powder_yellow.png"
    ];

    let stairBlocksImages = 
    [
        "textures/cobblestone.png",
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png",
        "textures/purpur_block.png", 
        "textures/quartz_block_bottom.png",
        "textures/red_sandstone_normal.png", 
        "textures/sandstone_normal.png",
        "textures/stonebrick.png"
    ];

    let dyeConcreteImages = 
    [
        "textures/dye_powder_white.png",
        "textures/dye_powder_black.png",
        "textures/dye_powder_blue.png",
        "textures/dye_powder_brown.png",
        "textures/dye_powder_cyan.png",
        "textures/dye_powder_gray.png",
        "textures/dye_powder_green.png",
        "textures/dye_powder_light_blue.png",
        "textures/dye_powder_lime.png",
        "textures/dye_powder_magenta.png",
        "textures/dye_powder_orange.png",
        "textures/dye_powder_pink.png",
        "textures/dye_powder_purple.png",
        "textures/dye_powder_red.png",
        "textures/dye_powder_silver.png",
        "textures/dye_powder_yellow.png"
    ];

    let toolMaterialsImages =
    [
        "textures/cobblestone.png",
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png", 
        "textures/iron_ingot.png",
        "textures/diamond.png",
        "textures/gold_ingot.png"
    ];

    let armorMaterialsImages = 
    [
        "textures/iron_ingot.png",
        "textures/diamond.png",
        "textures/gold_ingot.png", 
        "textures/leather.png"
    ];

    let dyeFlowersImages = 
    [
        "textures/flower_allium.png", 
        "textures/flower_blue_orchid.png",
        "textures/flower_dandelion.png", 
        "textures/flower_houstonia.png", 
        "textures/flower_oxeye_daisy.png", 
        "textures/flower_paeonia.png", 
        "textures/flower_rose.png", 
        "textures/flower_tulip_orange.png", 
        "textures/flower_tulip_pink.png", 
        "textures/flower_tulip_red.png", 
        "textures/flower_tulip_white.png",  
    ];

    let doorMaterialsImages = 
    [
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png", 
        "textures/iron_ingot.png"
    ];

    let minecartWithImages = 
    [
        "textures/hopper.png",
        "textures/furnace_front_off.png",
        "textures/chest.png",
        "textures/tnt_side.png"
    ];

    let pressurePlateImages =
    [
        "textures/stone.png",
        "textures/iron_ingot.png",
        "textures/gold_ingot.png", 
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png"
    ];

    let slabImages = 
    [
        "textures/cobblestone.png",
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png",
        "textures/stonebrick.png",
        "textures/quartz_block_bottom.png",
        "textures/stone.png"
    ];

    let buttonImages = 
    [
        "textures/planks_oak.png",
        "textures/planks_acacia.png", 
        "textures/planks_big_oak.png",
        "textures/planks_birch.png", 
        "textures/planks_jungle.png",
        "textures/planks_oak.png", 
        "textures/planks_spruce.png",
        "textures/stone.png"
    ];

    let woodLogImages =
    [
        "textures/log_acacia_top.png",
        "textures/log_big_oak_top.png",
        "textures/log_birch_top.png",
        "textures/log_jungle_top.png",
        "textures/log_oak_top.png",
        "textures/log_spruce_top.png"
    ];
    
    let woolTextures = document.getElementsByClassName('wool');
    let planksTextures = document.getElementsByClassName('planks');
    let dyeWoolTextures = document.getElementsByClassName('dye-wool');
    let stairBlockTextures = document.getElementsByClassName('stair-block');
    let dyeConcreteTextures = document.getElementsByClassName('dye-concrete');
    let toolMaterialsTextures = document.getElementsByClassName('tools');
    let armorMaterialsTextures = document.getElementsByClassName('armor');
    let dyeFlowersTextures = document.getElementsByClassName('dye-flower');
    let doorMaterialsTextures = document.getElementsByClassName('door');
    let minecartWithTextures = document.getElementsByClassName('minecart');
    let pressurePlateTextures = document.getElementsByClassName('pressure-plate');
    let slabTextures = document.getElementsByClassName('slab');
    let buttonTextures = document.getElementsByClassName('button');
    let woodLogTextures = document.getElementsByClassName('log');

    let woolCounter = 0;
    let planksCounter = 0;
    let dyeWoolCounter = 0;
    let stairBlockCounter = 0;
    let dyeConcreteCounter = 0;
    let toolMaterialsCounter = 0;
    let armorMaterialsCounter = 0;
    let dyeFlowersCounter = 0;
    let doorMaterialsCounter = 0;
    let minecartWithCounter = 0;
    let pressurePlateCounter = 0;
    let slabCounter = 0;
    let buttonCounter = 0;
    let woodLogCounter = 0;

    let timer = setInterval(() => {
        if(woolCounter > (woolImages.length - 1)) {
            woolCounter = 0;
        }

        if(planksCounter > (planksImages.length - 1)) {
            planksCounter = 0;
        }

        if(dyeWoolCounter > (dyeWoolImages.length - 1)) {
            dyeWoolCounter = 0;
        }

        if(stairBlockCounter > (stairBlocksImages.length - 1)) {
            stairBlockCounter = 0;
        }

        if(dyeConcreteCounter > (dyeConcreteImages.length - 1)) {
            dyeConcreteCounter = 0;
        }

        if(toolMaterialsCounter > (toolMaterialsImages.length - 1)) {
            toolMaterialsCounter = 0;
        }

        if(armorMaterialsCounter > (armorMaterialsImages.length - 1)) {
            armorMaterialsCounter = 0;
        }

        if(dyeFlowersCounter > (dyeFlowersImages.length - 1)) {
            dyeFlowersCounter = 0;
        }

        if(doorMaterialsCounter > (doorMaterialsImages.length - 1)) {
            doorMaterialsCounter = 0;
        }

        if(minecartWithCounter > (minecartWithImages.length - 1)) {
            minecartWithCounter = 0;
        }

        if(pressurePlateCounter > (pressurePlateImages.length - 1)) {
            pressurePlateCounter = 0;
        }

        if(slabCounter > (slabImages.length - 1)) {
            slabCounter = 0;
        }

        if(buttonCounter > (buttonImages.length - 1)) {
            buttonCounter = 0;
        }

        if(woodLogCounter > (woodLogImages.length - 1)) {
            woodLogCounter = 0;
        }

        Array.from(woolTextures).forEach((element, index, array) => {
            woolTextures[index].src = woolImages[woolCounter];
        });

        Array.from(planksTextures).forEach((element, index, array) => {
            planksTextures[index].src = planksImages[planksCounter];
        });

        Array.from(dyeWoolTextures).forEach((element, index, array) => {
            dyeWoolTextures[index].src = dyeWoolImages[dyeWoolCounter];
        });

        Array.from(stairBlockTextures).forEach((element, index, array) => {
            stairBlockTextures[index].src = stairBlocksImages[stairBlockCounter];
        });

        Array.from(dyeConcreteTextures).forEach((element, index, array) => {
            dyeConcreteTextures[index].src = dyeConcreteImages[dyeConcreteCounter];
        });

        Array.from(toolMaterialsTextures).forEach((element, index, array) => {
            toolMaterialsTextures[index].src = toolMaterialsImages[toolMaterialsCounter];
        });

        Array.from(armorMaterialsTextures).forEach((element, index, array) => {
            armorMaterialsTextures[index].src = armorMaterialsImages[armorMaterialsCounter];
        });
        
        Array.from(dyeFlowersTextures).forEach((element, index, array) => {
            dyeFlowersTextures[index].src = dyeFlowersImages[dyeFlowersCounter];
        });

        Array.from(doorMaterialsTextures).forEach((element, index, array) => {
            doorMaterialsTextures[index].src = doorMaterialsImages[doorMaterialsCounter];
        });

        Array.from(minecartWithTextures).forEach((element, index, array) => {
            minecartWithTextures[index].src = minecartWithImages[minecartWithCounter];
        });

        Array.from(pressurePlateTextures).forEach((element, index, array) => {
            pressurePlateTextures[index].src = pressurePlateImages[pressurePlateCounter];
        });

        Array.from(slabTextures).forEach((element, index, array) => {
            slabTextures[index].src = slabImages[slabCounter];
        });

        Array.from(buttonTextures).forEach((element, index, array) => {
            buttonTextures[index].src = buttonImages[buttonCounter];
        });

        Array.from(woodLogTextures).forEach((element, index, array) => {
            woodLogTextures[index].src = woodLogImages[woodLogCounter];
        });

        woolCounter++;
        planksCounter++;
        dyeWoolCounter++;
        stairBlockCounter++;
        dyeConcreteCounter++;
        toolMaterialsCounter++;
        armorMaterialsCounter++;
        dyeFlowersCounter++;
        doorMaterialsCounter++;
        minecartWithCounter++;
        pressurePlateCounter++;
        slabCounter++;
        buttonCounter++;
        woodLogCounter++;
    }, 1500);  
});