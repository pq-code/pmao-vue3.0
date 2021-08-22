export default {
    mounted (el) {
        const oSelectorIput = el.querySelector('.slectorInput'),
              oSelectorOption = el.querySelector('.selector-option');

        const oInput = oSelectorIput.querySelector('input'),
              oPlacHolder = oSelectorIput.querySelector('label'),
              oIcon = oSelectorIput.querySelector('span');

        const oOption = el.querySelector('.selector-option');

        const ss = function () {
            oPlacHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-arrow-down';
            oSelectorOption.style.display = 'block'
        }

        const ssr = function () {
            oPlacHolder.style.display = 'block';
            oIcon.className = 'iconfont icon-search';
            oSelectorOption.style.display = 'none'
        }

        oInput.addEventListener('focus', function (){
            ss();
        });
        oInput.addEventListener('blur', function (){
            ssr()
        });

        oPlacHolder.addEventListener('focus', function (){
            ss();
        });
        oPlacHolder.addEventListener('focus', function (){
            ssr();
        });

        oIcon.addEventListener('focus', function (){
            ss();
        });
        oIcon.addEventListener('focus', function (){
            ssr();
        });


    }
}