export default {
    mounted (el) {
        console.log(el);
        const oSelectorIput = el.querySelector('.slectorInput');
        console.log(oSelectorIput);
        const oInput = oSelectorIput.querySelector('input'),
              oPlacHolder = oSelectorIput.querySelector('label'),
              oIcon = oSelectorIput.querySelector('span');
        console.log(oPlacHolder);
        console.log(oIcon);
        oInput.addEventListener('focus', function (){
            oPlacHolder.style.display = 'none';
            oIcon.className = 'inconfont icon-search';
        });

        oInput.addEventListener('blue', function (){
            oPlacHolder.style.display = 'block';
            oIcon.className = 'inconfont icon-arrow-down';
        });
    }
}