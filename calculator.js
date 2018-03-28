let load = window.onload = () => {

    let overworldToNetherButton = document.getElementById('overworld-to-nether');
    let netherToOverworldButton = document.getElementById('nether-to-overworld');
    let errorOrSuccessMessage = document.getElementById('error-or-success-container');
    let resetButton = document.getElementById('reset');

    resetButton.onmouseup = () => {
        document.getElementById('overworld-x').value = null;
        document.getElementById('overworld-y').value = null;
        document.getElementById('overworld-z').value = null;
        document.getElementById('nether-x').value = null;
        document.getElementById('nether-y').value = null;
        document.getElementById('nether-z').value = null;

        let coordResetToast = document.getElementById('coords-reset');
        coordResetToast.show();
    }

    overworldToNetherButton.onmouseup = () => {
        let errorMessage = "";
        let successMessage = "";

        let isOverworldXValid = !isNaN(parseInt(document.getElementById('overworld-x').value));
        let isOverworldYValid = !isNaN(parseInt(document.getElementById('overworld-y').value));
        let isOverworldZValid = !isNaN(parseInt(document.getElementById('overworld-z').value));

        let isNetherXEmpty = document.getElementById('nether-x').value === "";
        let isNetherYEmpty = document.getElementById('nether-y').value === "";
        let isNetherZEmpty = document.getElementById('nether-z').value === "";

        if((isOverworldXValid && isOverworldYValid && isOverworldZValid) && (isNetherXEmpty && isNetherYEmpty && isNetherZEmpty)) {
            let netherX = parseInt(document.getElementById('overworld-x').value / 8);
            let netherY = parseInt(document.getElementById('overworld-y').value);
            let netherZ = parseInt(document.getElementById('overworld-z').value / 8);

            let netherXField = document.getElementById('nether-x');
            let netherYField = document.getElementById('nether-y');
            let netherZField = document.getElementById('nether-z');

            netherXField.value = netherX;
            netherYField.value = netherY;
            netherZField.value = netherZ;

            $("#nether-x").css({ color: "lime" });
            $("#nether-y").css({ color: "lime" });
            $("#nether-z").css({ color: "lime" });
        } else {
            let coordErrorToast = document.getElementById('coords-error');
            coordErrorToast.show();
        }
    }

    netherToOverworldButton.onmouseup = () => {
        let errorMessage = "";
        let successMessage = "";

        let isNetherXValid = !isNaN(parseInt(document.getElementById('nether-x').value));
        let isNetherYValid = !isNaN(parseInt(document.getElementById('nether-y').value));
        let isNetherZValid = !isNaN(parseInt(document.getElementById('nether-z').value));
        
        let isOverworldXEmpty = document.getElementById('overworld-x').value === "";
        let isOverworldYEmpty = document.getElementById('overworld-y').value === "";
        let isOverworldZEmpty = document.getElementById('overworld-z').value === "";

        if((isNetherXValid && isNetherYValid && isNetherZValid) && (isOverworldXEmpty && isOverworldYEmpty && isOverworldZEmpty)) {
            let overworldX = parseInt(document.getElementById('nether-x').value * 8);
            let overworldY = parseInt(document.getElementById('nether-y').value);
            let overworldZ = parseInt(document.getElementById('nether-z').value * 8);

            let overworldXField = document.getElementById('overworld-x');
            let overworldYField = document.getElementById('overworld-y');
            let overworldZField = document.getElementById('overworld-z');

            overworldXField.value = overworldX;
            overworldYField.value = overworldY;
            overworldZField.value = overworldZ;

            $("#overworld-x").css({ color: "lime" });
            $("#overworld-y").css({ color: "lime" });
            $("#overworld-z").css({ color: "lime" });
        } else {
            let coordErrorToast = document.getElementById('coords-error');
            coordErrorToast.show();
        }
    }
}