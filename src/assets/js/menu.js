function showMenu() {
    if (document.getElementById('mobilMenu')) {

        if (document.getElementById('mobilMenu').style.display == 'none') {
            document.getElementById('mobilCloseMenu').style.display = 'block';
            document.getElementById('mobilCloseMenu').style.display = 'none';
        }
        else {
            document.getElementById('mobilMenu').style.display = 'none';
            document.getElementById('mobilMenuContent').style.display = 'block';
            document.getElementById('mobilCloseMenu').style.display = 'flex';
        }
    }
}
function closeMenu() {
    if (document.getElementById('mobilMenu')) {

        if (document.getElementById('mobilMenuContent').style.display == 'none') {
            document.getElementById('mobilMenu').style.display = 'flex';
            document.getElementById('mobilMenuContent').style.display = 'none';
        }
        else {
            document.getElementById('mobilMenuContent').style.display = 'none';
            document.getElementById('mobilMenu').style.display = 'flex';
            document.getElementById('mobilCloseMenu').style.display = 'none';
        }
    }
}
function openChpMenu() {
    if (document.getElementById('chpMenu')) {

        if (document.getElementById('chpMenu').style.display == 'none') {
            document.getElementById('chpSubmenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
        }
        else {
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('chpSubmenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
        }
    }
}
function backtoChpSubMenu() {
    if (document.getElementById('chpSubmenu')) {

        if (document.getElementById('chpSubmenu').style.display == 'none') {
            document.getElementById('chpMenu').style.display = 'flex';
            document.getElementById('gundemMenu').style.display = 'flex';
            document.getElementById('yayinlarMenu').style.display = 'flex';
            document.getElementById('chpTvMenu').style.display = 'flex';
            document.getElementById('iletisimMenu').style.display = 'flex';
            document.getElementById('searchMenu').style.display = 'block';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('gundemSubMenu').style.display = 'none';
            document.getElementById('yayinlarSubMenu').style.display = 'none';
            document.getElementById('chpTvListSubMenu').style.display = 'none';
            document.getElementById('IletisimSubMenu').style.display = 'none';


        }
        else {
            document.getElementById('chpSubmenu').style.display = 'none';
            document.getElementById('chpMenu').style.display = 'flex';
            document.getElementById('gundemMenu').style.display = 'flex';
            document.getElementById('yayinlarMenu').style.display = 'flex';
            document.getElementById('chpTvMenu').style.display = 'flex';
            document.getElementById('iletisimMenu').style.display = 'flex';
            document.getElementById('searchMenu').style.display = 'block';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('gundemSubMenu').style.display = 'none';
            document.getElementById('yayinlarSubMenu').style.display = 'none';
            document.getElementById('chpTvListSubMenu').style.display = 'none';
            document.getElementById('IletisimSubMenu').style.display = 'none';
        }
    }
}
function backtoChpList() {
    if (document.getElementById('genelBaskanSubMenu')) {

        if (document.getElementById('genelBaskanSubMenu').style.display == 'none') {
            document.getElementById('GenelBaskanList').style.display = 'flex';
            document.getElementById('partiList').style.display = 'flex';
            document.getElementById('GonulluList').style.display = 'flex';
            document.getElementById('uyelikList').style.display = 'flex';
            document.getElementById('aidatList').style.display = 'flex';
            document.getElementById('chpTvList').style.display = 'flex';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('backIconChpList').style.display = 'none';
            document.getElementById('PartiSubMenu').style.display = 'none';
            document.getElementById('GonulluSubMenu').style.display = 'none';
            document.getElementById('UyelikSubMenu').style.display = 'none';
            document.getElementById('AidatSubMenu').style.display = 'none';
            document.getElementById('ChpTvSubMenu').style.display = 'none';


        }
        else {
            document.getElementById('genelBaskanSubMenu').style.display = 'none';
            document.getElementById('GenelBaskanList').style.display = 'flex';
            document.getElementById('partiList').style.display = 'flex';
            document.getElementById('GonulluList').style.display = 'flex';
            document.getElementById('uyelikList').style.display = 'flex';
            document.getElementById('aidatList').style.display = 'flex';
            document.getElementById('chpTvList').style.display = 'flex';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('backIconChpList').style.display = 'none';
            document.getElementById('PartiSubMenu').style.display = 'none';
            document.getElementById('GonulluSubMenu').style.display = 'none';
            document.getElementById('UyelikSubMenu').style.display = 'none';
            document.getElementById('AidatSubMenu').style.display = 'none';
            document.getElementById('ChpTvSubMenu').style.display = 'none';
        }
    }
}
function openGenelBaskanSubMenu() {
    if (document.getElementById('GenelBaskanList')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('genelBaskanSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('genelBaskanSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openPartiSubMenu() {
    if (document.getElementById('partiList')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('PartiSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('PartiSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openGonulluSubMenu() {
    if (document.getElementById('GonulluSubMenu')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('GonulluSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('GonulluSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openUyelikSubMenu() {
    if (document.getElementById('uyelikList')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('UyelikSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('UyelikSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openAidatSubMenu() {
    if (document.getElementById('aidatList')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('AidatSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('AidatSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openChpTvSubMenu() {
    if (document.getElementById('chpTvList')) {

        if (document.getElementById('GenelBaskanList').style.display == 'none') {
            document.getElementById('ChpTvSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';

        }
        else {
            document.getElementById('GenelBaskanList').style.display = 'none';
            document.getElementById('ChpTvSubMenu').style.display = 'block';
            document.getElementById('partiList').style.display = 'none';
            document.getElementById('GonulluList').style.display = 'none';
            document.getElementById('uyelikList').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('aidatList').style.display = 'none';
            document.getElementById('chpTvList').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpSubMenu').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'block';
            
        }
    }
}
function openGundemSubMenu() {
    if (document.getElementById('gundemMenu')) {

        if (document.getElementById('gundemMenu').style.display == 'none') {
            document.getElementById('gundemSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            
        }
        else {
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('gundemSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';

        }
    }
}
function openYayinlarSubMenu() {
    if (document.getElementById('yayinlarMenu')) {

        if (document.getElementById('yayinlarMenu').style.display == 'none') {
            document.getElementById('yayinlarSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            
        }
        else {
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('yayinlarSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';

        }
    }
}
function openChpTvListSubMenu() {
    if (document.getElementById('chpTvMenu')) {

        if (document.getElementById('chpTvMenu').style.display == 'none') {
            document.getElementById('chpTvListSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';
            
        }
        else {
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('chpTvListSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';

        }
    }
}
function openIletisimSubMenu() {
    if (document.getElementById('iletisimMenu')) {


        if (document.getElementById('iletisimMenu').style.display == 'none') {
            document.getElementById('IletisimSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';
            
        }
        else {
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('IletisimSubMenu').style.display = 'block';
            document.getElementById('backIconChpSubMenu').style.display = 'block';
            document.getElementById('chpMenu').style.display = 'none';
            document.getElementById('gundemMenu').style.display = 'none';
            document.getElementById('yayinlarMenu').style.display = 'none';
            document.getElementById('chpTvMenu').style.display = 'none';
            document.getElementById('iletisimMenu').style.display = 'none';
            document.getElementById('searchMenu').style.display = 'none';
            document.getElementById('socialMediaIcons').style.display = 'none';
            document.getElementById('backIconChpList').style.display = 'none';

        }
    }
}
