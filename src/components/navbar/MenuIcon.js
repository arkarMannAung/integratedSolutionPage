import menu from '../../images/drop.riv';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
const MenuIcon = props=>{
    const stateMachines = "Drop State";
    const stateName = "drop";
    const params = {
        src: menu,
        stateMachines: "Drop State",
        autoplay: true,
    }
    const { rive, RiveComponent } = useRive(params);
    const dropInput = useStateMachineInput(rive, "Drop State", "drop",props.isDrop);
    const dropToggle = () => {
        if(dropInput.value){
            props.onDrop(false);
            dropInput.value = false;
        }else{
            props.onDrop(true);
            dropInput.value = true;
        }
    }
    let dropStyle = 'w-12 h-12 p-1.5 overflow-hidden rounded-md flex flex-col justify-center items-center cursor-pointer ml-4 ring-1' + (props.dark==1? ' ring-gray-300':' bg-gray-600');
    return (
        <div 
            onClick={dropToggle}
            className={dropStyle}>
            <RiveComponent width="100%"/>
        </div>
    )
}
export default MenuIcon;