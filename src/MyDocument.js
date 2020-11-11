import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const BORDER_COLOR = '#bfbfbf'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 40
const COLN_WIDTH = (100 - COL1_WIDTH)
const styles = StyleSheet.create({
  body: {
    padding: 10,
	
  },
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row",
  }, 
  tableCol1: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },   
  tableCol: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: 5, 
    fontSize: 10,
	textAlign: 'justify'
  }
});



const Quixote = () => {
	const title = 'Another row'
	const desc = 'Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.Quijote de la Mancha famoso hidalgo D.Quijote de la Mancha famoso hidalgo D.Quijote de la Mancha famoso hidalgo D.Quijote de la Mancha'
	let longDesc = desc;
	for(let i=0; i<100; i++) longDesc += desc;
	return (
	  <Document>
		<Page size="A4" style={styles.body}>
		  <View style={styles.table}> 
				  <View style={styles.tableRow}> 
					  <View style={styles.tableCol1}> 
						<Text style={styles.tableCell}>{title}</Text> 
					  </View> 
					  <View style={styles.tableCol}> 
						<Text style={styles.tableCell}>{longDesc}</Text> 
					  </View>
				  </View>
		  </View>
		</Page>
	  </Document>
  )
};
export default Quixote;