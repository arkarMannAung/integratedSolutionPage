
import bulb from '../../images/bulb.riv';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
const DarkModeIcon = props=>{
    const stateMachine = "Dark State";
    const input_name = "dark";
    const params = {
        src: bulb,
        stateMachines: stateMachine,
        autoplay: true,
    };
    const { rive, RiveComponent } = useRive(params);
    const darkInput = useStateMachineInput(rive, stateMachine, input_name,props.dark);
    const darkToggle = () => {
        if(darkInput.value==0){
            props.onToogle(1);
            darkInput.value = 1;
        }else{
            props.onToogle(0);
            darkInput.value = 0;
        }
    };
    let bulbStyle = 'w-14 h-14 p-2 overflow-hidden rounded-full flex flex-col justify-center items-center cursor-pointer ml-4 shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700' + (props.dark==1? ' bg-gray-300':' bg-gray-600');
    return (
        <div onClick={darkToggle}
            className={bulbStyle}>
            <RiveComponent/>
        </div>
    )
}
export default DarkModeIcon;