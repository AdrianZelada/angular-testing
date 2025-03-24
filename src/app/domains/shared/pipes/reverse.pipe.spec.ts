import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator/jest';
import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
    let spectator: SpectatorPipe<ReversePipe>;
    const createPipe = createPipeFactory({
        pipe: ReversePipe,
    });

    it('should reverse a simple string', () => {
        spectator = createPipe(`{{ 'adrian' | reverse }}`);
        expect(spectator.element).toHaveText('nairda');
    });

    it('should handle empty string', () => {
        spectator = createPipe(`{{ '' | reverse }}`);
        expect(spectator.element).toHaveText('');
    });

    it('should handle string with spaces', () => {
        spectator = createPipe(`{{ 'hello world' | reverse }}`);
        expect(spectator.element).toHaveText('dlrow olleh');
    });

    it('should handle string with special characters', () => {
        spectator = createPipe(`{{ 'hello@world!' | reverse }}`);
        expect(spectator.element).toHaveText('!dlrow@olleh');
    });

    it('should handle string with numbers', () => {
        spectator = createPipe(`{{ 'hello123' | reverse }}`);
        expect(spectator.element).toHaveText('321olleh');
    });

    it('should handle string with mixed case', () => {
        spectator = createPipe(`{{ 'HeLLo' | reverse }}`);
        expect(spectator.element).toHaveText('oLLeH');
    });

    it('should handle string with unicode characters', () => {
        spectator = createPipe(`{{ 'café' | reverse }}`);
        expect(spectator.element).toHaveText('éfac');
    });
});
