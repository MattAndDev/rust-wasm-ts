use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum(arr: &[f64]) -> f64 {
    let mut acc : f64 = 0.;
    for x in 0..arr.len() {
        acc = acc + arr[x]
    }
    return acc
}