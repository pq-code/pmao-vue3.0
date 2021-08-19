export default {
    mounted (el) {
        const oSelectorIput = el.querySelector('.slectorInput');

        const oInput = oSelectorIput.querySelector('input'),
              oPlacHolder = oSelectorIput.querySelector('label'),
              oIcon = oSelectorIput.querySelector('span');

        const oOption = el.querySelector('.selector-option');

        const ss = function () {
            oPlacHolder.style.display = 'none';
            oIcon.className = 'iconfont icon-arrow-down';
        }

        const ssr = function () {
            oPlacHolder.style.display = 'block';
            oIcon.className = 'iconfont icon-search';
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