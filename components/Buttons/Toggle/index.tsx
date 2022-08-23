import { SwitchContainer, Switch } from './styles';
import { ToggleText } from '../../NewHeader/styles';

type ToggleProps = {
  isOn: boolean;
  toggleSwitch: (preference: string) => void;
  showToggleText: boolean;
};

export function Toggle({ isOn, toggleSwitch, showToggleText }: ToggleProps) {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <>
      <SwitchContainer isOn={isOn} onClick={toggleSwitch}>
        <Switch layout transition={spring} />
      </SwitchContainer>

      <ToggleText showToggleText={showToggleText}>dark mode</ToggleText>
    </>
  );
}
