Clazz.declarePackage ("J.popup");
Clazz.load (["J.popup.PopupResource"], "J.popup.MainPopupResourceBundle", ["J.i18n.GT", "J.util.SB", "$.TextFormat"], function () {
c$ = Clazz.declareType (J.popup, "MainPopupResourceBundle", J.popup.PopupResource);
Clazz.overrideMethod (c$, "getMenuName", 
function () {
return "popupMenu";
});
Clazz.overrideMethod (c$, "buildStructure", 
function (menuStructure) {
this.addItems (J.popup.MainPopupResourceBundle.menuContents);
this.addItems (J.popup.MainPopupResourceBundle.structureContents);
this.setStructure (menuStructure);
}, "~S");
c$.Box = $_M(c$, "Box", 
($fz = function (cmd) {
return "if (showBoundBox or showUnitcell) {" + cmd + "} else {boundbox on;" + cmd + ";boundbox off}";
}, $fz.isPrivate = true, $fz), "~S");
Clazz.overrideMethod (c$, "getWordContents", 
function () {
var wasTranslating = J.i18n.GT.setDoTranslate (true);
var words = ["modelSetMenu", J.i18n.GT._ ("No atoms loaded"), "configurationComputedMenu", J.i18n.GT._ ("Configurations"), "elementsComputedMenu", J.i18n.GT._ ("Element"), "FRAMESbyModelComputedMenu", J.i18n.GT._ ("Model/Frame"), "languageComputedMenu", J.i18n.GT._ ("Language"), "PDBaaResiduesComputedMenu", J.i18n.GT._ ("By Residue Name"), "PDBnucleicResiduesComputedMenu", J.i18n.GT._ ("By Residue Name"), "PDBcarboResiduesComputedMenu", J.i18n.GT._ ("By Residue Name"), "PDBheteroComputedMenu", J.i18n.GT._ ("By HETATM"), "surfMoComputedMenuText", J.i18n.GT._ ("Molecular Orbitals ({0})"), "SYMMETRYSelectComputedMenu", J.i18n.GT._ ("Symmetry"), "SYMMETRYShowComputedMenu", J.i18n.GT._ ("Space Group"), "SYMMETRYhide", J.i18n.GT._ ("Hide Symmetry"), "hiddenModelSetText", J.i18n.GT._ ("Model information"), "selectMenuText", J.i18n.GT._ ("Select ({0})"), "allModelsText", J.i18n.GT._ ("All {0} models"), "configurationMenuText", J.i18n.GT._ ("Configurations ({0})"), "modelSetCollectionText", J.i18n.GT._ ("Collection of {0} models"), "atomsText", J.i18n.GT._ ("atoms: {0}"), "bondsText", J.i18n.GT._ ("bonds: {0}"), "groupsText", J.i18n.GT._ ("groups: {0}"), "chainsText", J.i18n.GT._ ("chains: {0}"), "polymersText", J.i18n.GT._ ("polymers: {0}"), "modelMenuText", J.i18n.GT._ ("model {0}"), "viewMenuText", J.i18n.GT._ ("View {0}"), "mainMenuText", J.i18n.GT._ ("Main Menu"), "biomoleculesMenuText", J.i18n.GT._ ("Biomolecules"), "biomoleculeText", J.i18n.GT._ ("biomolecule {0} ({1} atoms)"), "loadBiomoleculeText", J.i18n.GT._ ("load biomolecule {0} ({1} atoms)"), "selectAll", J.i18n.GT._ ("All"), "selectNone", J.i18n.GT._ ("None"), "hideNotSelectedCB", J.i18n.GT._ ("Display Selected Only"), "invertSelection", J.i18n.GT._ ("Invert Selection"), "viewMenu", J.i18n.GT._ ("View"), "front", J.i18n.GT._ ("Front"), "left", J.i18n.GT._ ("Left"), "right", J.i18n.GT._ ("Right"), "top", J.util.TextFormat.split (J.i18n.GT._ ("Top[as in \"view from the top, from above\" - (translators: remove this bracketed part]"), '[')[0], "bottom", J.i18n.GT._ ("Bottom"), "back", J.i18n.GT._ ("Back"), "PDBproteinMenu", J.i18n.GT._ ("Protein"), "allProtein", J.i18n.GT._ ("All"), "proteinBackbone", J.i18n.GT._ ("Backbone"), "proteinSideChains", J.i18n.GT._ ("Side Chains"), "polar", J.i18n.GT._ ("Polar Residues"), "nonpolar", J.i18n.GT._ ("Nonpolar Residues"), "positiveCharge", J.i18n.GT._ ("Basic Residues (+)"), "negativeCharge", J.i18n.GT._ ("Acidic Residues (-)"), "noCharge", J.i18n.GT._ ("Uncharged Residues"), "PDBnucleicMenu", J.i18n.GT._ ("Nucleic"), "allNucleic", J.i18n.GT._ ("All"), "DNA", J.i18n.GT._ ("DNA"), "RNA", J.i18n.GT._ ("RNA"), "nucleicBackbone", J.i18n.GT._ ("Backbone"), "nucleicBases", J.i18n.GT._ ("Bases"), "atPairs", J.i18n.GT._ ("AT pairs"), "gcPairs", J.i18n.GT._ ("GC pairs"), "auPairs", J.i18n.GT._ ("AU pairs"), "PDBheteroMenu", J.i18n.GT._ ("Hetero"), "allHetero", J.i18n.GT._ ("All PDB \"HETATM\""), "Solvent", J.i18n.GT._ ("All Solvent"), "Water", J.i18n.GT._ ("All Water"), "nonWaterSolvent", J.i18n.GT._ ("Nonaqueous Solvent") + " (solvent and not water)", "exceptWater", J.i18n.GT._ ("Nonaqueous HETATM") + " (hetero and not water)", "Ligand", J.i18n.GT._ ("Ligand"), "allCarbo", J.i18n.GT._ ("All"), "PDBcarboMenu", J.i18n.GT._ ("Carbohydrate"), "PDBnoneOfTheAbove", J.i18n.GT._ ("None of the above"), "renderMenu", J.i18n.GT._ ("Style"), "renderSchemeMenu", J.i18n.GT._ ("Scheme"), "renderCpkSpacefill", J.i18n.GT._ ("CPK Spacefill"), "renderBallAndStick", J.i18n.GT._ ("Ball and Stick"), "renderSticks", J.i18n.GT._ ("Sticks"), "renderWireframe", J.i18n.GT._ ("Wireframe"), "PDBrenderCartoonsOnly", J.i18n.GT._ ("Cartoon"), "PDBrenderTraceOnly", J.i18n.GT._ ("Trace"), "atomMenu", J.i18n.GT._ ("Atoms"), "atomNone", J.i18n.GT._ ("Off"), "atom15", J.i18n.GT._ ("{0}% van der Waals", "15"), "atom20", J.i18n.GT._ ("{0}% van der Waals", "20"), "atom25", J.i18n.GT._ ("{0}% van der Waals", "25"), "atom50", J.i18n.GT._ ("{0}% van der Waals", "50"), "atom75", J.i18n.GT._ ("{0}% van der Waals", "75"), "atom100", J.i18n.GT._ ("{0}% van der Waals", "100"), "bondMenu", J.i18n.GT._ ("Bonds"), "bondNone", J.i18n.GT._ ("Off"), "bondWireframe", J.i18n.GT._ ("On"), "bond100", J.i18n.GT._ ("{0} \u00C5", "0.10"), "bond150", J.i18n.GT._ ("{0} \u00C5", "0.15"), "bond200", J.i18n.GT._ ("{0} \u00C5", "0.20"), "bond250", J.i18n.GT._ ("{0} \u00C5", "0.25"), "bond300", J.i18n.GT._ ("{0} \u00C5", "0.30"), "hbondMenu", J.i18n.GT._ ("Hydrogen Bonds"), "hbondNone", J.i18n.GT._ ("Off"), "hbondCalc", J.i18n.GT._ ("Calculate"), "hbondWireframe", J.i18n.GT._ ("On"), "PDBhbondSidechain", J.i18n.GT._ ("Set H-Bonds Side Chain"), "PDBhbondBackbone", J.i18n.GT._ ("Set H-Bonds Backbone"), "hbond100", J.i18n.GT._ ("{0} \u00C5", "0.10"), "hbond150", J.i18n.GT._ ("{0} \u00C5", "0.15"), "hbond200", J.i18n.GT._ ("{0} \u00C5", "0.20"), "hbond250", J.i18n.GT._ ("{0} \u00C5", "0.25"), "hbond300", J.i18n.GT._ ("{0} \u00C5", "0.30"), "ssbondMenu", J.i18n.GT._ ("Disulfide Bonds"), "ssbondNone", J.i18n.GT._ ("Off"), "ssbondWireframe", J.i18n.GT._ ("On"), "PDBssbondSidechain", J.i18n.GT._ ("Set SS-Bonds Side Chain"), "PDBssbondBackbone", J.i18n.GT._ ("Set SS-Bonds Backbone"), "ssbond100", J.i18n.GT._ ("{0} \u00C5", "0.10"), "ssbond150", J.i18n.GT._ ("{0} \u00C5", "0.15"), "ssbond200", J.i18n.GT._ ("{0} \u00C5", "0.20"), "ssbond250", J.i18n.GT._ ("{0} \u00C5", "0.25"), "ssbond300", J.i18n.GT._ ("{0} \u00C5", "0.30"), "PDBstructureMenu", J.i18n.GT._ ("Structures"), "structureNone", J.i18n.GT._ ("Off"), "backbone", J.i18n.GT._ ("Backbone"), "cartoon", J.i18n.GT._ ("Cartoon"), "cartoonRockets", J.i18n.GT._ ("Cartoon Rockets"), "ribbons", J.i18n.GT._ ("Ribbons"), "rockets", J.i18n.GT._ ("Rockets"), "strands", J.i18n.GT._ ("Strands"), "trace", J.i18n.GT._ ("Trace"), "VIBRATIONMenu", J.i18n.GT._ ("Vibration"), "vibrationOff", J.i18n.GT._ ("Off"), "vibrationOn", J.i18n.GT._ ("On"), "vibration20", "*2", "vibration05", "/2", "VIBRATIONvectorMenu", J.i18n.GT._ ("Vectors"), "spectraMenu", J.i18n.GT._ ("Spectra"), "hnmrMenu", J.i18n.GT._ ("1H-NMR"), "cnmrMenu", J.i18n.GT._ ("13C-NMR"), "vectorOff", J.i18n.GT._ ("Off"), "vectorOn", J.i18n.GT._ ("On"), "vector3", J.i18n.GT._ ("{0} pixels", "3"), "vector005", J.i18n.GT._ ("{0} \u00C5", "0.05"), "vector01", J.i18n.GT._ ("{0} \u00C5", "0.10"), "vectorScale02", J.i18n.GT._ ("Scale {0}", "0.2"), "vectorScale05", J.i18n.GT._ ("Scale {0}", "0.5"), "vectorScale1", J.i18n.GT._ ("Scale {0}", "1"), "vectorScale2", J.i18n.GT._ ("Scale {0}", "2"), "vectorScale5", J.i18n.GT._ ("Scale {0}", "5"), "stereoMenu", J.i18n.GT._ ("Stereographic"), "stereoNone", J.i18n.GT._ ("None"), "stereoRedCyan", J.i18n.GT._ ("Red+Cyan glasses"), "stereoRedBlue", J.i18n.GT._ ("Red+Blue glasses"), "stereoRedGreen", J.i18n.GT._ ("Red+Green glasses"), "stereoCrossEyed", J.i18n.GT._ ("Cross-eyed viewing"), "stereoWallEyed", J.i18n.GT._ ("Wall-eyed viewing"), "labelMenu", J.i18n.GT._ ("Labels"), "labelNone", J.i18n.GT._ ("None"), "labelSymbol", J.i18n.GT._ ("With Element Symbol"), "labelName", J.i18n.GT._ ("With Atom Name"), "labelNumber", J.i18n.GT._ ("With Atom Number"), "labelPositionMenu", J.i18n.GT._ ("Position Label on Atom"), "labelCentered", J.i18n.GT._ ("Centered"), "labelUpperRight", J.i18n.GT._ ("Upper Right"), "labelLowerRight", J.i18n.GT._ ("Lower Right"), "labelUpperLeft", J.i18n.GT._ ("Upper Left"), "labelLowerLeft", J.i18n.GT._ ("Lower Left"), "colorMenu", J.i18n.GT._ ("Color"), "[color_atoms]Menu", J.i18n.GT._ ("Atoms"), "schemeMenu", J.i18n.GT._ ("By Scheme"), "cpk", J.i18n.GT._ ("Element (CPK)"), "altloc#PDB", J.i18n.GT._ ("Alternative Location"), "molecule", J.i18n.GT._ ("Molecule"), "formalcharge", J.i18n.GT._ ("Formal Charge"), "partialcharge#CHARGE", J.i18n.GT._ ("Partial Charge"), "relativeTemperature#BFACTORS", J.i18n.GT._ ("Temperature (Relative)"), "fixedTemperature#BFACTORS", J.i18n.GT._ ("Temperature (Fixed)"), "amino#PDB", J.i18n.GT._ ("Amino Acid"), "structure#PDB", J.i18n.GT._ ("Secondary Structure"), "chain#PDB", J.i18n.GT._ ("Chain"), "group#PDB", J.i18n.GT._ ("Group"), "monomer#PDB", J.i18n.GT._ ("Monomer"), "shapely#PDB", J.i18n.GT._ ("Shapely"), "none", J.i18n.GT._ ("Inherit"), "black", J.i18n.GT._ ("Black"), "white", J.i18n.GT._ ("White"), "cyan", J.i18n.GT._ ("Cyan"), "red", J.i18n.GT._ ("Red"), "orange", J.i18n.GT._ ("Orange"), "yellow", J.i18n.GT._ ("Yellow"), "green", J.i18n.GT._ ("Green"), "blue", J.i18n.GT._ ("Blue"), "indigo", J.i18n.GT._ ("Indigo"), "violet", J.i18n.GT._ ("Violet"), "salmon", J.i18n.GT._ ("Salmon"), "olive", J.i18n.GT._ ("Olive"), "maroon", J.i18n.GT._ ("Maroon"), "gray", J.i18n.GT._ ("Gray"), "slateblue", J.i18n.GT._ ("Slate Blue"), "gold", J.i18n.GT._ ("Gold"), "orchid", J.i18n.GT._ ("Orchid"), "opaque", J.i18n.GT._ ("Make Opaque"), "translucent", J.i18n.GT._ ("Make Translucent"), "[color_bonds]Menu", J.i18n.GT._ ("Bonds"), "[color_hbonds]Menu", J.i18n.GT._ ("Hydrogen Bonds"), "[color_ssbonds]Menu", J.i18n.GT._ ("Disulfide Bonds"), "colorPDBStructuresMenu", J.i18n.GT._ ("Structures"), "[color_backbone]Menu", J.i18n.GT._ ("Backbone"), "[color_trace]Menu", J.i18n.GT._ ("Trace"), "[color_cartoon]sMenu", J.i18n.GT._ ("Cartoon"), "[color_ribbon]sMenu", J.i18n.GT._ ("Ribbons"), "[color_rockets]Menu", J.i18n.GT._ ("Rockets"), "[color_strands]Menu", J.i18n.GT._ ("Strands"), "[color_labels]Menu", J.i18n.GT._ ("Labels"), "[color_background]Menu", J.i18n.GT._ ("Background"), "[color_isosurface]Menu", J.i18n.GT._ ("Surfaces"), "[color_vectors]Menu", J.i18n.GT._ ("Vectors"), "[color_axes]Menu", J.i18n.GT._ ("Axes"), "[color_boundbox]Menu", J.i18n.GT._ ("Boundbox"), "[color_UNITCELL]Menu", J.i18n.GT._ ("Unit cell"), "zoomMenu", J.i18n.GT._ ("Zoom"), "zoom50", "50%", "zoom100", "100%", "zoom150", "150%", "zoom200", "200%", "zoom400", "400%", "zoom800", "800%", "zoomIn", J.i18n.GT._ ("Zoom In"), "zoomOut", J.i18n.GT._ ("Zoom Out"), "spinMenu", J.i18n.GT._ ("Spin"), "spinOn", J.i18n.GT._ ("On"), "spinOff", J.i18n.GT._ ("Off"), "[set_spin_X]Menu", J.i18n.GT._ ("Set X Rate"), "[set_spin_Y]Menu", J.i18n.GT._ ("Set Y Rate"), "[set_spin_Z]Menu", J.i18n.GT._ ("Set Z Rate"), "[set_spin_FPS]Menu", J.i18n.GT._ ("Set FPS"), "s0", "0", "s5", "5", "s10", "10", "s20", "20", "s30", "30", "s40", "40", "s50", "50", "FRAMESanimateMenu", J.i18n.GT._ ("Animation"), "animModeMenu", J.i18n.GT._ ("Animation Mode"), "onceThrough", J.i18n.GT._ ("Play Once"), "palindrome", J.i18n.GT._ ("Palindrome"), "loop", J.i18n.GT._ ("Loop"), "play", J.i18n.GT._ ("Play"), "pause", J.i18n.GT._ ("Pause"), "resume", J.i18n.GT._ ("Resume"), "stop", J.i18n.GT._ ("Stop"), "nextframe", J.i18n.GT._ ("Next Frame"), "prevframe", J.i18n.GT._ ("Previous Frame"), "rewind", J.i18n.GT._ ("Rewind"), "playrev", J.i18n.GT._ ("Reverse"), "restart", J.i18n.GT._ ("Restart"), "FRAMESanimFpsMenu", J.i18n.GT._ ("Set FPS"), "animfps5", "5", "animfps10", "10", "animfps20", "20", "animfps30", "30", "animfps50", "50", "measureMenu", J.i18n.GT._ ("Measurements"), "measureOff", J.i18n.GT._ ("Double-Click begins and ends all measurements"), "measureDistance", J.i18n.GT._ ("Click for distance measurement"), "measureAngle", J.i18n.GT._ ("Click for angle measurement"), "measureTorsion", J.i18n.GT._ ("Click for torsion (dihedral) measurement"), "PDBmeasureSequence", J.i18n.GT._ ("Click two atoms to display a sequence in the console"), "measureDelete", J.i18n.GT._ ("Delete measurements"), "measureList", J.i18n.GT._ ("List measurements"), "distanceNanometers", J.i18n.GT._ ("Distance units nanometers"), "distanceAngstroms", J.i18n.GT._ ("Distance units Angstroms"), "distancePicometers", J.i18n.GT._ ("Distance units picometers"), "pickingMenu", J.i18n.GT._ ("Set picking"), "pickOff", J.i18n.GT._ ("Off"), "pickCenter", J.i18n.GT._ ("Center"), "pickIdent", J.i18n.GT._ ("Identity"), "pickLabel", J.i18n.GT._ ("Label"), "pickAtom", J.i18n.GT._ ("Select atom"), "PDBpickChain", J.i18n.GT._ ("Select chain"), "pickElement", J.i18n.GT._ ("Select element"), "PDBpickGroup", J.i18n.GT._ ("Select group"), "pickMolecule", J.i18n.GT._ ("Select molecule"), "SYMMETRYpickSite", J.i18n.GT._ ("Select site"), "SYMMETRYpickSymmetry", J.i18n.GT._ ("Show symmetry operation"), "pickSpin", J.i18n.GT._ ("Spin"), "showMenu", J.i18n.GT._ ("Show"), "showConsole", J.i18n.GT._ ("Console"), "showFile", J.i18n.GT._ ("File Contents"), "showFileHeader", J.i18n.GT._ ("File Header"), "showHistory", J.i18n.GT._ ("History"), "showIsosurface", J.i18n.GT._ ("Isosurface JVXL data"), "showMeasure", J.i18n.GT._ ("Measurements"), "showMo", J.i18n.GT._ ("Molecular orbital JVXL data"), "showModel", J.i18n.GT._ ("Model"), "showOrient", J.i18n.GT._ ("Orientation"), "showSpacegroup", J.i18n.GT._ ("Space group"), "SYMMETRYshowSymmetry", J.i18n.GT._ ("Symmetry"), "showState", J.i18n.GT._ ("Current state"), "fileMenu", J.i18n.GT._ ("File"), "reload", J.i18n.GT._ ("Reload"), "SIGNEDloadPdb", J.i18n.GT._ ("Open from PDB"), "SIGNEDloadFileOrUrl", J.i18n.GT._ ("Open file or URL"), "SIGNEDloadFileUnitCell", J.i18n.GT._ ("Load full unit cell"), "SIGNEDloadScript", J.i18n.GT._ ("Open script"), "writeFileTextVARIABLE", J.i18n.GT._ ("Save a copy of {0}"), "writeState", J.i18n.GT._ ("Save script with state"), "writeHistory", J.i18n.GT._ ("Save script with history"), "SIGNEDwriteJpg", J.i18n.GT._ ("Export {0} image", "JPG"), "SIGNEDwritePng", J.i18n.GT._ ("Export {0} image", "PNG"), "SIGNEDwritePngJmol", J.i18n.GT._ ("Export {0} image", "PNG+JMOL"), "SIGNEDwriteGif", J.i18n.GT._ ("Export {0} image", "GIF"), "SIGNEDwritePovray", J.i18n.GT._ ("Export {0} image", "POV-Ray"), "SIGNEDwriteJmol", J.i18n.GT._ ("Save all as JMOL file (zip)"), "SIGNEDwriteIsosurface", J.i18n.GT._ ("Save JVXL isosurface"), "SIGNEDwriteVrml", J.i18n.GT._ ("Export {0} 3D model", "VRML"), "SIGNEDwriteX3d", J.i18n.GT._ ("Export {0} 3D model", "X3D"), "SIGNEDwriteIdtf", J.i18n.GT._ ("Export {0} 3D model", "IDTF"), "SIGNEDwriteMaya", J.i18n.GT._ ("Export {0} 3D model", "Maya"), "computationMenu", J.i18n.GT._ ("Computation"), "minimize", J.i18n.GT._ ("Optimize structure"), "modelkit", J.i18n.GT._ ("Model kit"), "UNITCELLshow", J.i18n.GT._ ("Unit cell"), "extractMOL", J.i18n.GT._ ("Extract MOL data"), "surfaceMenu", J.i18n.GT._ ("Surfaces"), "surfDots", J.i18n.GT._ ("Dot Surface"), "surfVDW", J.i18n.GT._ ("van der Waals Surface"), "surfMolecular", J.i18n.GT._ ("Molecular Surface"), "surfSolvent14", J.i18n.GT._ ("Solvent Surface ({0}-Angstrom probe)", "1.4"), "surfSolventAccessible14", J.i18n.GT._ ("Solvent-Accessible Surface (VDW + {0} Angstrom)", "1.4"), "CHARGEsurfMEP", J.i18n.GT._ ("Molecular Electrostatic Potential"), "surfOpaque", J.i18n.GT._ ("Make Opaque"), "surfTranslucent", J.i18n.GT._ ("Make Translucent"), "surfOff", J.i18n.GT._ ("Off"), "FILEUNITMenu", J.i18n.GT._ ("Symmetry"), "FILEMOLload", J.i18n.GT._ ("Reload {0}", "(molecular)"), "FILEUNITone", J.i18n.GT._ ("Reload {0}", "{1 1 1}"), "FILEUNITnine", J.i18n.GT._ ("Reload {0}", "{444 666 1}"), "FILEUNITnineRestricted", J.i18n.GT._ ("Reload {0} + Display {1}", ["{444 666 1}", "555"]), "FILEUNITninePoly", J.i18n.GT._ ("Reload + Polyhedra"), "[set_axes]Menu", J.i18n.GT._ ("Axes"), "[set_boundbox]Menu", J.i18n.GT._ ("Boundbox"), "[set_UNITCELL]Menu", J.i18n.GT._ ("Unit cell"), "off#axes", J.i18n.GT._ ("Hide"), "dotted", J.i18n.GT._ ("Dotted"), "byPixelMenu", J.i18n.GT._ ("Pixel Width"), "1p", J.i18n.GT._ ("{0} px", "1"), "3p", J.i18n.GT._ ("{0} px", "3"), "5p", J.i18n.GT._ ("{0} px", "5"), "10p", J.i18n.GT._ ("{0} px", "10"), "byAngstromMenu", J.i18n.GT._ ("Angstrom Width"), "10a", J.i18n.GT._ ("{0} \u00C5", "0.10"), "20a", J.i18n.GT._ ("{0} \u00C5", "0.20"), "25a", J.i18n.GT._ ("{0} \u00C5", "0.25"), "50a", J.i18n.GT._ ("{0} \u00C5", "0.50"), "100a", J.i18n.GT._ ("{0} \u00C5", "1.0"), "showSelectionsCB", J.i18n.GT._ ("Selection Halos"), "showHydrogensCB", J.i18n.GT._ ("Show Hydrogens"), "showMeasurementsCB", J.i18n.GT._ ("Show Measurements"), "perspectiveDepthCB", J.i18n.GT._ ("Perspective Depth"), "showBoundBoxCB", J.i18n.GT._ ("Boundbox"), "showAxesCB", J.i18n.GT._ ("Axes"), "showUNITCELLCB", J.i18n.GT._ ("Unit cell"), "colorrasmolCB", J.i18n.GT._ ("RasMol Colors"), "aboutComputedMenu", J.i18n.GT._ ("About..."), "APPLETjmolUrl", "http://www.jmol.org", "APPLETmouseManualUrl", J.i18n.GT._ ("Mouse Manual"), "APPLETtranslationUrl", J.i18n.GT._ ("Translations")];
J.i18n.GT.setDoTranslate (wasTranslating);
return words;
});
Clazz.overrideMethod (c$, "getMenuAsText", 
function (title) {
return "# Jmol.mnu " + title + "\n\n" + "# Part I -- Menu Structure\n" + "# ------------------------\n\n" + this.dumpStructure (J.popup.MainPopupResourceBundle.menuContents) + "\n\n" + "# Part II -- Key Definitions\n" + "# --------------------------\n\n" + this.dumpStructure (J.popup.MainPopupResourceBundle.structureContents) + "\n\n" + "# Part III -- Word Translations\n" + "# -----------------------------\n\n" + this.dumpWords ();
}, "~S");
$_M(c$, "dumpWords", 
($fz = function () {
var wordContents = this.getWordContents ();
var s =  new J.util.SB ();
for (var i = 0; i < wordContents.length; i++) {
var key = wordContents[i++];
if (this.structure.getProperty (key) == null) s.append (key).append (" | ").append (wordContents[i]).appendC ('\n');
}
return s.toString ();
}, $fz.isPrivate = true, $fz));
$_M(c$, "dumpStructure", 
($fz = function (items) {
var previous = "";
var s =  new J.util.SB ();
for (var i = 0; i < items.length; i++) {
var key = items[i][0];
var label = this.words.getProperty (key);
if (label != null) key += " | " + label;
s.append (key).append (" = ").append (items[i][1] == null ? previous : (previous = items[i][1])).appendC ('\n');
}
return s.toString ();
}, $fz.isPrivate = true, $fz), "~A");
Clazz.defineStatics (c$,
"MENU_NAME", "popupMenu");
c$.menuContents = c$.prototype.menuContents = [["@COLOR", "black white red orange yellow green cyan blue indigo violet"], ["@AXESCOLOR", "gray salmon maroon olive slateblue gold orchid"], ["popupMenu", "FRAMESbyModelComputedMenu configurationComputedMenu - selectMenuText viewMenu renderMenu colorMenu - surfaceMenu FILEUNITMenu - zoomMenu spinMenu VIBRATIONMenu spectraMenu FRAMESanimateMenu - measureMenu pickingMenu - showConsole showMenu fileMenu computationMenu - languageComputedMenu aboutComputedMenu"], ["selectMenuText", "hideNotSelectedCB showSelectionsCB - selectAll selectNone invertSelection - elementsComputedMenu SYMMETRYSelectComputedMenu - PDBproteinMenu PDBnucleicMenu PDBheteroMenu PDBcarboMenu PDBnoneOfTheAbove"], ["PDBproteinMenu", "PDBaaResiduesComputedMenu - allProtein proteinBackbone proteinSideChains - polar nonpolar - positiveCharge negativeCharge noCharge"], ["PDBcarboMenu", "PDBcarboResiduesComputedMenu - allCarbo"], ["PDBnucleicMenu", "PDBnucleicResiduesComputedMenu - allNucleic nucleicBackbone nucleicBases - DNA RNA - atPairs auPairs gcPairs"], ["PDBheteroMenu", "PDBheteroComputedMenu - allHetero Solvent Water - Ligand exceptWater nonWaterSolvent"], ["viewMenu", "front left right top bottom back"], ["renderMenu", "perspectiveDepthCB showBoundBoxCB showUNITCELLCB showAxesCB stereoMenu - renderSchemeMenu - atomMenu labelMenu bondMenu hbondMenu ssbondMenu - PDBstructureMenu [set_axes]Menu [set_boundbox]Menu [set_UNITCELL]Menu"], ["renderSchemeMenu", "renderCpkSpacefill renderBallAndStick renderSticks renderWireframe PDBrenderCartoonsOnly PDBrenderTraceOnly"], ["atomMenu", "showHydrogensCB - atomNone - atom15 atom20 atom25 atom50 atom75 atom100"], ["bondMenu", "bondNone bondWireframe - bond100 bond150 bond200 bond250 bond300"], ["hbondMenu", "hbondCalc hbondNone hbondWireframe - PDBhbondSidechain PDBhbondBackbone - hbond100 hbond150 hbond200 hbond250 hbond300"], ["ssbondMenu", "ssbondNone ssbondWireframe - PDBssbondSidechain PDBssbondBackbone - ssbond100 ssbond150 ssbond200 ssbond250 ssbond300"], ["PDBstructureMenu", "structureNone - backbone cartoon cartoonRockets ribbons rockets strands trace"], ["VIBRATIONvectorMenu", "vectorOff vectorOn vibScale20 vibScale05 vector3 vector005 vector01 - vectorScale02 vectorScale05 vectorScale1 vectorScale2 vectorScale5"], ["stereoMenu", "stereoNone stereoRedCyan stereoRedBlue stereoRedGreen stereoCrossEyed stereoWallEyed"], ["labelMenu", "labelNone - labelSymbol labelName labelNumber - labelPositionMenu"], ["labelPositionMenu", "labelCentered labelUpperRight labelLowerRight labelUpperLeft labelLowerLeft"], ["colorMenu", "colorrasmolCB - [color_atoms]Menu [color_bonds]Menu [color_hbonds]Menu [color_ssbonds]Menu colorPDBStructuresMenu [color_isosurface]Menu - [color_labels]Menu [color_vectors]Menu - [color_axes]Menu [color_boundbox]Menu [color_UNITCELL]Menu [color_background]Menu"], ["[color_atoms]Menu", "schemeMenu - @COLOR - opaque translucent"], ["[color_bonds]Menu", "none - @COLOR - opaque translucent"], ["[color_hbonds]Menu", null], ["[color_ssbonds]Menu", null], ["[color_labels]Menu", null], ["[color_vectors]Menu", null], ["[color_backbone]Menu", "none - schemeMenu - @COLOR - opaque translucent"], ["[color_cartoon]sMenu", null], ["[color_ribbon]sMenu", null], ["[color_rockets]Menu", null], ["[color_strands]Menu", null], ["[color_trace]Menu", null], ["[color_background]Menu", "@COLOR"], ["[color_isosurface]Menu", "@COLOR - opaque translucent"], ["[color_axes]Menu", "@AXESCOLOR"], ["[color_boundbox]Menu", null], ["[color_UNITCELL]Menu", null], ["colorPDBStructuresMenu", "[color_backbone]Menu [color_cartoon]sMenu [color_ribbon]sMenu [color_rockets]Menu [color_strands]Menu [color_trace]Menu"], ["schemeMenu", "cpk - formalcharge partialcharge#CHARGE - altloc#PDB amino#PDB chain#PDB group#PDB molecule monomer#PDB shapely#PDB structure#PDB relativeTemperature#BFACTORS fixedTemperature#BFACTORS"], ["zoomMenu", "zoom50 zoom100 zoom150 zoom200 zoom400 zoom800 - zoomIn zoomOut"], ["spinMenu", "spinOn spinOff - [set_spin_X]Menu [set_spin_Y]Menu [set_spin_Z]Menu - [set_spin_FPS]Menu"], ["VIBRATIONMenu", "vibrationOff vibrationOn vibration20 vibration05 VIBRATIONvectorMenu"], ["spectraMenu", "hnmrMenu cnmrMenu"], ["FRAMESanimateMenu", "animModeMenu - play pause resume stop - nextframe prevframe rewind - playrev restart - FRAMESanimFpsMenu"], ["FRAMESanimFpsMenu", "animfps5 animfps10 animfps20 animfps30 animfps50"], ["measureMenu", "showMeasurementsCB - measureOff measureDistance measureAngle measureTorsion PDBmeasureSequence - measureDelete measureList - distanceNanometers distanceAngstroms distancePicometers"], ["pickingMenu", "pickOff pickCenter pickIdent pickLabel pickAtom pickMolecule pickElement PDBpickChain PDBpickGroup SYMMETRYpickSite pickSpin"], ["computationMenu", "minimize modelkit"], ["showMenu", "showHistory showFile showFileHeader - showOrient showMeasure - showSpacegroup showState SYMMETRYshowSymmetry UNITCELLshow - showIsosurface showMo - extractMOL"], ["fileMenu", "SIGNEDloadFileOrUrl SIGNEDloadPdb SIGNEDloadScript - reload SIGNEDloadFileUnitCell - writeFileTextVARIABLE writeState writeHistory SIGNEDwriteJmol SIGNEDwriteIsosurface - SIGNEDJAVAwriteGif SIGNEDNOGLwriteJpg SIGNEDNOGLwritePng SIGNEDNOGLwritePngJmol SIGNEDJAVAwritePovray - SIGNEDJAVAwriteVrml SIGNEDJAVAwriteX3d SIGNEDJAVAwriteIdtf SIGNEDJAVAwriteMaya"], ["[set_spin_X]Menu", "s0 s5 s10 s20 s30 s40 s50"], ["[set_spin_Y]Menu", null], ["[set_spin_Z]Menu", null], ["[set_spin_FPS]Menu", null], ["animModeMenu", "onceThrough palindrome loop"], ["surfaceMenu", "surfDots surfVDW surfSolventAccessible14 surfSolvent14 surfMolecular CHARGEsurfMEP surfMoComputedMenuText - surfOpaque surfTranslucent surfOff"], ["FILEUNITMenu", "SYMMETRYShowComputedMenu SYMMETRYhide FILEMOLload FILEUNITone FILEUNITnine FILEUNITnineRestricted FILEUNITninePoly"], ["[set_axes]Menu", "off#axes dotted - byPixelMenu byAngstromMenu"], ["[set_boundbox]Menu", null], ["[set_UNITCELL]Menu", null], ["byPixelMenu", "1p 3p 5p 10p"], ["byAngstromMenu", "10a 20a 25a 50a 100a"], ["aboutComputedMenu", "- "]];
c$.structureContents = c$.prototype.structureContents = [["colorrasmolCB", ""], ["hideNotSelectedCB", "set hideNotSelected true | set hideNotSelected false; hide(none)"], ["perspectiveDepthCB", ""], ["showAxesCB", "set showAxes true | set showAxes false;set axesMolecular"], ["showBoundBoxCB", ""], ["showHydrogensCB", ""], ["showMeasurementsCB", ""], ["showSelectionsCB", ""], ["showUNITCELLCB", ""], ["selectAll", "SELECT all"], ["selectNone", "SELECT none"], ["invertSelection", "SELECT not selected"], ["allProtein", "SELECT protein"], ["proteinBackbone", "SELECT protein and backbone"], ["proteinSideChains", "SELECT protein and not backbone"], ["polar", "SELECT protein and polar"], ["nonpolar", "SELECT protein and not polar"], ["positiveCharge", "SELECT protein and basic"], ["negativeCharge", "SELECT protein and acidic"], ["noCharge", "SELECT protein and not (acidic,basic)"], ["allCarbo", "SELECT carbohydrate"], ["allNucleic", "SELECT nucleic"], ["DNA", "SELECT dna"], ["RNA", "SELECT rna"], ["nucleicBackbone", "SELECT nucleic and backbone"], ["nucleicBases", "SELECT nucleic and not backbone"], ["atPairs", "SELECT a,t"], ["gcPairs", "SELECT g,c"], ["auPairs", "SELECT a,u"], ["A", "SELECT a"], ["C", "SELECT c"], ["G", "SELECT g"], ["T", "SELECT t"], ["U", "SELECT u"], ["allHetero", "SELECT hetero"], ["Solvent", "SELECT solvent"], ["Water", "SELECT water"], ["nonWaterSolvent", "SELECT solvent and not water"], ["exceptWater", "SELECT hetero and not water"], ["Ligand", "SELECT ligand"], ["PDBnoneOfTheAbove", "SELECT not(hetero,protein,nucleic,carbohydrate)"], ["front", J.popup.MainPopupResourceBundle.Box ("moveto 2.0 front;delay 1")], ["left", J.popup.MainPopupResourceBundle.Box ("moveto 1.0 front;moveto 2.0 left;delay 1")], ["right", J.popup.MainPopupResourceBundle.Box ("moveto 1.0 front;moveto 2.0 right;delay 1")], ["top", J.popup.MainPopupResourceBundle.Box ("moveto 1.0 front;moveto 2.0 top;delay 1")], ["bottom", J.popup.MainPopupResourceBundle.Box ("moveto 1.0 front;moveto 2.0 bottom;delay 1")], ["back", J.popup.MainPopupResourceBundle.Box ("moveto 1.0 front;moveto 2.0 back;delay 1")], ["renderCpkSpacefill", "restrict bonds not selected;select not selected;spacefill 100%;color cpk"], ["renderBallAndStick", "restrict bonds not selected;select not selected;spacefill 23%AUTO;wireframe 0.15;color cpk"], ["renderSticks", "restrict bonds not selected;select not selected;wireframe 0.3;color cpk"], ["renderWireframe", "restrict bonds not selected;select not selected;wireframe on;color cpk"], ["PDBrenderCartoonsOnly", "restrict bonds not selected;select not selected;cartoons on;color structure"], ["PDBrenderTraceOnly", "restrict bonds not selected;select not selected;trace on;color structure"], ["atomNone", "cpk off"], ["atom15", "cpk 15%"], ["atom20", "cpk 20%"], ["atom25", "cpk 25%"], ["atom50", "cpk 50%"], ["atom75", "cpk 75%"], ["atom100", "cpk on"], ["bondNone", "wireframe off"], ["bondWireframe", "wireframe on"], ["bond100", "wireframe .1"], ["bond150", "wireframe .15"], ["bond200", "wireframe .2"], ["bond250", "wireframe .25"], ["bond300", "wireframe .3"], ["hbondCalc", "hbonds calculate"], ["hbondNone", "hbonds off"], ["hbondWireframe", "hbonds on"], ["PDBhbondSidechain", "set hbonds sidechain"], ["PDBhbondBackbone", "set hbonds backbone"], ["hbond100", "hbonds .1"], ["hbond150", "hbonds .15"], ["hbond200", "hbonds .2"], ["hbond250", "hbonds .25"], ["hbond300", "hbonds .3"], ["ssbondNone", "ssbonds off"], ["ssbondWireframe", "ssbonds on"], ["PDBssbondSidechain", "set ssbonds sidechain"], ["PDBssbondBackbone", "set ssbonds backbone"], ["ssbond100", "ssbonds .1"], ["ssbond150", "ssbonds .15"], ["ssbond200", "ssbonds .2"], ["ssbond250", "ssbonds .25"], ["ssbond300", "ssbonds .3"], ["structureNone", "backbone off;cartoons off;ribbons off;rockets off;strands off;trace off;"], ["backbone", "restrict not selected;select not selected;backbone 0.3"], ["cartoon", "restrict not selected;select not selected;set cartoonRockets false;cartoons on"], ["cartoonRockets", "restrict not selected;select not selected;set cartoonRockets;cartoons on"], ["ribbons", "restrict not selected;select not selected;ribbons on"], ["rockets", "restrict not selected;select not selected;rockets on"], ["strands", "restrict not selected;select not selected;strands on"], ["trace", "restrict not selected;select not selected;trace 0.3"], ["vibrationOff", "vibration off"], ["vibrationOn", "vibration on"], ["vibration20", "vibrationScale *= 2"], ["vibration05", "vibrationScale /= 2"], ["vectorOff", "vectors off"], ["vectorOn", "vectors on"], ["vector3", "vectors 3"], ["vector005", "vectors 0.05"], ["vector01", "vectors 0.1"], ["vectorScale02", "vector scale 0.2"], ["vectorScale05", "vector scale 0.5"], ["vectorScale1", "vector scale 1"], ["vectorScale2", "vector scale 2"], ["vectorScale5", "vector scale 5"], ["stereoNone", "stereo off"], ["stereoRedCyan", "stereo redcyan 3"], ["stereoRedBlue", "stereo redblue 3"], ["stereoRedGreen", "stereo redgreen 3"], ["stereoCrossEyed", "stereo -5"], ["stereoWallEyed", "stereo 5"], ["labelNone", "label off"], ["labelSymbol", "label %e"], ["labelName", "label %a"], ["labelNumber", "label %i"], ["labelCentered", "set labeloffset 0 0"], ["labelUpperRight", "set labeloffset 4 4"], ["labelLowerRight", "set labeloffset 4 -4"], ["labelUpperLeft", "set labeloffset -4 4"], ["labelLowerLeft", "set labeloffset -4 -4"], ["zoom50", "zoom 50"], ["zoom100", "zoom 100"], ["zoom150", "zoom 150"], ["zoom200", "zoom 200"], ["zoom400", "zoom 400"], ["zoom800", "zoom 800"], ["zoomIn", "move 0 0 0 40 0 0 0 0 1"], ["zoomOut", "move 0 0 0 -40 0 0 0 0 1"], ["spinOn", "spin on"], ["spinOff", "spin off"], ["s0", "0"], ["s5", "5"], ["s10", "10"], ["s20", "20"], ["s30", "30"], ["s40", "40"], ["s50", "50"], ["onceThrough", "anim mode once#"], ["palindrome", "anim mode palindrome#"], ["loop", "anim mode loop#"], ["play", "anim play#"], ["pause", "anim pause#"], ["resume", "anim resume#"], ["stop", "anim off#"], ["nextframe", "frame next#"], ["prevframe", "frame prev#"], ["playrev", "anim playrev#"], ["rewind", "anim rewind#"], ["restart", "anim on#"], ["animfps5", "anim fps 5#"], ["animfps10", "anim fps 10#"], ["animfps20", "anim fps 20#"], ["animfps30", "anim fps 30#"], ["animfps50", "anim fps 50#"], ["measureOff", "set pickingstyle MEASURE OFF; set picking OFF"], ["measureDistance", "set pickingstyle MEASURE; set picking MEASURE DISTANCE"], ["measureAngle", "set pickingstyle MEASURE; set picking MEASURE ANGLE"], ["measureTorsion", "set pickingstyle MEASURE; set picking MEASURE TORSION"], ["PDBmeasureSequence", "set pickingstyle MEASURE; set picking MEASURE SEQUENCE"], ["measureDelete", "measure delete"], ["measureList", "console on;show measurements"], ["distanceNanometers", "select *; set measure nanometers"], ["distanceAngstroms", "select *; set measure angstroms"], ["distancePicometers", "select *; set measure picometers"], ["pickOff", "set picking off"], ["pickCenter", "set picking center"], ["pickIdent", "set picking ident"], ["pickLabel", "set picking label"], ["pickAtom", "set picking atom"], ["PDBpickChain", "set picking chain"], ["pickElement", "set picking element"], ["PDBpickGroup", "set picking group"], ["pickMolecule", "set picking molecule"], ["SYMMETRYpickSite", "set picking site"], ["pickSpin", "set picking spin"], ["SYMMETRYpickSymmetry", "set picking symmetry"], ["showConsole", "console"], ["showFile", "console on;show file"], ["showFileHeader", "console on;getProperty FileHeader"], ["showHistory", "console on;show history"], ["showIsosurface", "console on;show isosurface"], ["showMeasure", "console on;show measure"], ["showMo", "console on;show mo"], ["showModel", "console on;show model"], ["showOrient", "console on;show orientation"], ["showSpacegroup", "console on;show spacegroup"], ["showState", "console on;show state"], ["reload", "load \"\""], ["SIGNEDloadPdb", "load ?PdbId?"], ["SIGNEDloadFileOrUrl", "load ?"], ["SIGNEDloadFileUnitCell", "load ? {1 1 1}"], ["SIGNEDloadScript", "script ?.spt"], ["writeFileTextVARIABLE", "if (_applet && !_signedApplet) { console;show file } else { write file \"?FILE?\"}"], ["writeState", "if (_applet && !_signedApplet) { console;show state } else { write state \"?FILEROOT?.spt\"}"], ["writeHistory", "if (_applet && !_signedApplet) { console;show history } else { write history \"?FILEROOT?.his\"}"], ["SIGNEDwriteJmol", "write \"?FILEROOT?.jmol\""], ["SIGNEDwriteIsosurface", "write isosurface \"?FILEROOT?.jvxl\""], ["SIGNEDJAVAwriteGif", "write image \"?FILEROOT?.gif\""], ["SIGNEDNOGLwriteJpg", "write image \"?FILEROOT?.jpg\""], ["SIGNEDNOGLwritePng", "write image \"?FILEROOT?.png\""], ["SIGNEDNOGLwritePngJmol", "write PNGJ \"?FILEROOT?.png\""], ["SIGNEDJAVAwritePovray", "write POVRAY \"?FILEROOT?.pov\""], ["SIGNEDJAVAwriteVrml", "write VRML \"?FILEROOT?.wrl\""], ["SIGNEDJAVAwriteX3d", "write X3D \"?FILEROOT?.x3d\""], ["SIGNEDJAVAwriteIdtf", "write IDTF \"?FILEROOT?.idtf\""], ["SIGNEDJAVAwriteMaya", "write MAYA \"?FILEROOT?.ma\""], ["SYMMETRYshowSymmetry", "console on;show symmetry"], ["UNITCELLshow", "console on;show unitcell"], ["extractMOL", "console on;getproperty extractModel \"visible\" "], ["minimize", "minimize"], ["modelkit", "set modelkitmode"], ["surfDots", "dots on"], ["surfVDW", "isosurface delete resolution 0 solvent 0 translucent"], ["surfMolecular", "isosurface delete resolution 0 molecular translucent"], ["surfSolvent14", "isosurface delete resolution 0 solvent 1.4 translucent"], ["surfSolventAccessible14", "isosurface delete resolution 0 sasurface 1.4 translucent"], ["CHARGEsurfMEP", "isosurface delete resolution 0 vdw color range all map MEP translucent"], ["surfOpaque", "mo opaque;isosurface opaque"], ["surfTranslucent", "mo translucent;isosurface translucent"], ["surfOff", "mo delete;isosurface delete;select *;dots off"], ["SYMMETRYhide", "draw sym_* delete"], ["FILEMOLload", "save orientation;load \"\";restore orientation;center"], ["FILEUNITone", "save orientation;load \"\" {1 1 1} ;restore orientation;center"], ["FILEUNITnine", "save orientation;load \"\" {444 666 1} ;restore orientation;center"], ["FILEUNITnineRestricted", "save orientation;load \"\" {444 666 1} ;restore orientation; unitcell on; display cell=555;center visible;zoom 200"], ["FILEUNITninePoly", "save orientation;load \"\" {444 666 1} ;restore orientation; unitcell on; display cell=555; polyhedra 4,6 (displayed);center (visible);zoom 200"], ["1p", "on"], ["3p", "3"], ["5p", "5"], ["10p", "10"], ["10a", "0.1"], ["20a", "0.20"], ["25a", "0.25"], ["50a", "0.50"], ["100a", "1.0"]];
});
