import { css, StyleSheet } from 'aphrodite'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Scrollbars from 'react-custom-scrollbars'

import CuneiformChar from './CuneiformChar'

import { RiddleUIStore } from '../stores/riddleUIStore'

const styles = StyleSheet.create({
    legend: {
        width: '100%'
    },
    alphabet: {
        height: '100%',
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflowY: 'scroll'
    },
    legendCell: {
        width: 50,
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    highlighted: {
        backgroundColor: 'rgba(253, 212, 02, 0.3)',
        boxShadow: '0px 1px 11px -1px #90752d'
    }
})

const alphabet = 'abcdefghijklmnopqrstuvwxyz 0123456789 !?'
const alphabetRows = alphabet.split(' ')

export interface CuneiformLegendProps {
    selectedChar?: string
}

const CuneiformLegend = ({ selectedChar }: CuneiformLegendProps) =>
    <div className={css(styles.legend)} id="cuneiformLegend">
        <div className={css(styles.alphabet)}>
            {alphabetRows.map((row, rowIndex) =>
                row.split('').map((letter, letterIndex) =>
                    <div
                        key={letterIndex}
                        className={css(
                            styles.legendCell,
                            selectedChar === letter && styles.highlighted
                        )}
                    >
                        <div>
                            <CuneiformChar value={letter} />
                        </div>
                        <div>
                            {letter}
                        </div>
                    </div>
                )
            )}
        </div>
    </div>

export interface CuneiformLegendContainerProps {
    riddleUIStore?: RiddleUIStore
}

@inject('riddleUIStore')
@observer
class CuneiformLegendContainer extends React.Component<
    CuneiformLegendContainerProps,
    undefined
> {
    render() {
        const riddleUIStore = this.props.riddleUIStore

        return (
            <CuneiformLegend
                selectedChar={riddleUIStore.selectedCuneiformChar}
            />
        )
    }
}

export default CuneiformLegendContainer
