import operationimg from './img/operation.png';
import warehouseimg from './img/data-warehouse.png';
import investmentimg from './img/investment.png';
import ItemChiSiamo from './ItemChiSiamo';


export default function CosaFacciamo() {
    return (
      <div id="cosafacciamo" className = "w-full flex flex-wrap dark:text-white">
          <ItemChiSiamo 
            image={operationimg} 
            title={'Operazioni'}
            description={
                'Lipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
         />
         <ItemChiSiamo 
            image={warehouseimg} 
            title={'Werehouse'}
            description={
                'Lipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
         />
         <ItemChiSiamo 
            image={investmentimg} 
            title={'Investimenti'}
            description={
                'Lipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
         />
      </div>
    )
  }
  
  