var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [Geomorphometry]\nOrder   = [:function, :type]","category":"page"},{"location":"reference/#Geomorphometry.TPI-Tuple{AbstractMatrix{var\"#s61\"} where var\"#s61\"<:Real}","page":"Reference","title":"Geomorphometry.TPI","text":"TPI(dem::Matrix{<:Real})\n\nTPI stands for Topographic Position Index, which is defined as the difference between a central pixel and the mean of its surrounding cells (see Wilson et al 2007, Marine Geodesy 30:3-35).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.TRI-Tuple{AbstractMatrix{var\"#s61\"} where var\"#s61\"<:Real}","page":"Reference","title":"Geomorphometry.TRI","text":"TRI(dem::Matrix{<:Real})\n\nTRI stands for Terrain Ruggedness Index, which measures the difference between a central pixel and its surrounding cells. This algorithm uses the square root of the sum of the square of the difference between a central pixel and its surrounding cells. This is recommended for terrestrial use cases.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.aspect-Tuple{AbstractMatrix{var\"#s57\"} where var\"#s57\"<:Real}","page":"Reference","title":"Geomorphometry.aspect","text":"aspect(dem::Matrix{<:Real}, method=Horn())\n\nAspect is direction of slope, as defined in Burrough, P. A., and McDonell, R. A., (1998, Principles of Geographical Information Systems).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.curvature-Tuple{AbstractMatrix{var\"#s57\"} where var\"#s57\"<:Real}","page":"Reference","title":"Geomorphometry.curvature","text":"curvature(dem::Matrix{<:Real}; cellsize=1.0)\n\nCurvature is derivative of slope, so the second derivative of the DEM.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.hillshade-Tuple{AbstractMatrix{var\"#s23\"} where var\"#s23\"<:Real}","page":"Reference","title":"Geomorphometry.hillshade","text":"hillshade(dem::Matrix{<:Real}; azimuth=315.0, zenith=45.0, cellsize=1.0)\n\nhillshade is the simulated illumination of a surface based on its slope and aspect given a light source with azimuth and zenith angles in °, , as defined in Burrough, P. A., and McDonell, R. A., (1998, Principles of Geographical Information Systems).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.multihillshade-Tuple{AbstractMatrix{var\"#s23\"} where var\"#s23\"<:Real}","page":"Reference","title":"Geomorphometry.multihillshade","text":"multihillshade(dem::Matrix{<:Real}; cellsize=1.0)\n\nmultihillshade is the simulated illumination of a surface based on its slope and aspect. Like hillshade, but now using multiple sources as defined in https://pubs.usgs.gov/of/1992/of92-422/of92-422.pdf, similar to GDALs -multidirectional.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.opening!-Union{Tuple{T}, Tuple{Matrix{T}, Integer, Matrix{T}}} where T<:Real","page":"Reference","title":"Geomorphometry.opening!","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.opening-Union{Tuple{T}, Tuple{Matrix{T}, Integer}} where T<:Real","page":"Reference","title":"Geomorphometry.opening","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.opening_circ!-Union{Tuple{T}, Tuple{Matrix{T}, Integer, Matrix{T}}} where T<:Real","page":"Reference","title":"Geomorphometry.opening_circ!","text":"Apply the opening operation to A with window size ω.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.pitremoval-Tuple{AbstractMatrix{var\"#s57\"} where var\"#s57\"<:Real}","page":"Reference","title":"Geomorphometry.pitremoval","text":"pitremoval(dem::Matrix{<:Real})\n\nRemove pits from a DEM Array if the center cell of a 3x3 patch is limit lower or than the surrounding cells.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.pmf-Tuple{AbstractMatrix{var\"#s9\"} where var\"#s9\"<:Real}","page":"Reference","title":"Geomorphometry.pmf","text":"B, flags = pmf(A; ωₘ, slope, dhₘ, dh₀, cellsize, adjust, erode)\n\nApplies the progressive morphological filter by Zhang et al. (2003) [zhang2003] to A.\n\nOutput\n\nB::Array{T,2} Maximum allowable values\nflags::Array{Float64,2} A sized array with window sizes if filtered, zero if not filtered.\n\nAfterwards, one can retrieve the resulting mask for A by A .<= B or flags .== 0..\n\nArguments\n\nA::Array{T,2} Input Array\nωₘ::Real=20. Maximum window size [m]\nslope::Real=0.01 Terrain slope [m/m]\ndhₘ::Real=2.5 Maximum elevation threshold [m]\ndh₀::Real=0.2 Initial elevation threshold [m]\ncellsize::Real=1. Cellsize in [m]\n\n[zhang2003]: Zhang, Keqi, Shu-Ching Chen, Dean Whitman, Mei-Ling Shyu, Jianhua Yan, and Chengcui Zhang. “A Progressive Morphological Filter for Removing Nonground Measurements from Airborne LIDAR Data.” IEEE Transactions on Geoscience and Remote Sensing 41, no. 4 (2003): 872–82. https://doi.org/10.1109/TGRS.2003.810682.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.pssm-Tuple{AbstractMatrix{var\"#s23\"} where var\"#s23\"<:Real}","page":"Reference","title":"Geomorphometry.pssm","text":"image = pssm(A; exaggeration=2.3, resolution=1.0)\n\nPerceptually Shaded Slope Map by Pingel, Clarke. 2014 [pingel2014].\n\nOutput\n\nimage::Gray{T,2} Grayscale image\n\nArguments\n\nA::Array{Real,2} Input Array\nexaggeration::Real=2.3 Factor to exaggerate elevation\ncellsize::Real=1.0 Size of cell to account for horizontal resolution if different from vertical resolution\n\n[pingel2014]: Pingel, Thomas, and Clarke, Keith. 2014. ‘Perceptually Shaded Slope Maps for the Visualization of Digital Surface Models’. Cartographica: The International Journal for Geographic Information and Geovisualization 49 (4): 225–40. https://doi.org/10/ggnthv.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.roughness-Tuple{AbstractMatrix{var\"#s61\"} where var\"#s61\"<:Real}","page":"Reference","title":"Geomorphometry.roughness","text":"roughness(dem::Matrix{<:Real})\n\nRoughness is the largest inter-cell difference of a central pixel and its surrounding cell, as defined in Wilson et al (2007, Marine Geodesy 30:3-35).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.skb-Union{Tuple{AbstractArray{T, N} where N}, Tuple{T}} where T<:Real","page":"Reference","title":"Geomorphometry.skb","text":"mask = skb(A; mean=mean(A))\n\nApplies skewness balancing by Bartels e.a (2006) [bartels2006] to A. Improved the performance by applying a binary search to find the threshold value.\n\nOutput\n\nmask::BitMatrix Mask of allowed values\n\n[bartels2006]: Bartels, M., Hong Wei, and D.C. Mason. 2006. “DTM Generation from LIDAR Data Using Skewness Balancing.” In 18th International Conference on Pattern Recognition (ICPR’06), 1:566–69. https://doi.org/10/cwk4v2.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.skbr-Tuple{Any}","page":"Reference","title":"Geomorphometry.skbr","text":"mask = skbr(A; iterations=10)\n\nApplies recursive skewness balancing by Bartels e.a (2006) [bartels2006] to A. Applies skb iterations times to the object (non-terrain) mask, as to include more (sloped) terrain.\n\nOutput\n\nmask::BitMatrix Mask of allowed values\n\n[bartels2006]: Bartels, M., Hong Wei, and D.C. Mason. 2006. “DTM Generation from LIDAR Data Using Skewness Balancing.” In 18th International Conference on Pattern Recognition (ICPR’06), 1:566–69. https://doi.org/10/cwk4v2.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.slope-Tuple{AbstractMatrix{var\"#s57\"} where var\"#s57\"<:Real}","page":"Reference","title":"Geomorphometry.slope","text":"slope(dem::Matrix{<:Real}; cellsize=1.0, method=Horn())\n\nSlope is the rate of change between a cell and its neighbors as defined in Burrough, P. A., and McDonell, R. A., (1998, Principles of Geographical Information Systems).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.smf-Union{Tuple{AbstractMatrix{T}}, Tuple{T}} where T<:Real","page":"Reference","title":"Geomorphometry.smf","text":"B = smf(A; ω, slope, dhₘ, dh₀, cellsize)\n\nApplies the simple morphological filter by Pingel et al. (2013) [pingel2013] to A.\n\nOutput\n\nB::Array{Float64,2} A filtered version of A\n\nArguments\n\nA::Array{T,2} Input Array\nω::Float64=18. Maximum window size [m]\nslope::Float64=0.01 Terrain slope [m/m]\ncellsize::Float64=1. Cellsize in [m]\n\n[pingel2013]: Pingel, Thomas J., Keith C. Clarke, and William A. McBride. 2013. ‘An Improved Simple Morphological Filter for the Terrain Classification of Airborne LIDAR Data’. ISPRS Journal of Photogrammetry and Remote Sensing 77 (March): 21–30. https://doi.org/10.1016/j.isprsjprs.2012.12.002.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.spread-Tuple{AbstractMatrix{var\"#s25\"} where var\"#s25\"<:Real, AbstractMatrix{var\"#s24\"} where var\"#s24\"<:Real, Real}","page":"Reference","title":"Geomorphometry.spread","text":"spread(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Real; distance=Euclidean(), res=1.0)\nspread(points::Matrix{<:Real}, initial::Real, friction::Real; distance=Euclidean(), res=1.0)\n\nOptimized (and more accurate) function based on the same friction everywhere.\n\nWhen the friction is the same everywhere, there's no need for searching the shortest cost path, as one can just take a direct line to the input points.\n\nThe calculated cost is more accurate, as there's no 'zigzag' from cell center to cell center.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.spread-Tuple{AbstractMatrix{var\"#s3\"} where var\"#s3\"<:Real, AbstractMatrix{var\"#s2\"} where var\"#s2\"<:Real, AbstractMatrix{var\"#s55\"} where var\"#s55\"<:Real}","page":"Reference","title":"Geomorphometry.spread","text":"spread(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Matrix{<:Real}; res=1, limit=Inf)\n\nTotal friction distance spread from points as by Tomlin (1983) [tomlin1983]. This is also the method implemented by PCRaster.\n\nOutput\n\nArray{Float64,2} Total friction distance\n\nArguments\n\npoints::Matrix{<:Real} Input Array\ninitial::Matrix{<:Real} Factor to exaggerate elevation\nfriction::Matrix{<:Real} Resolution of cell size\nres=1 Resolution or cell size\nlimit=Inf Initial fill value\n\n[tomlin1983]: Tomlin, Charles Dana. 1983. Digital Cartographic Modeling Techniques in Environmental Planning. Yale University.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.spread2-Tuple{AbstractMatrix{var\"#s11\"} where var\"#s11\"<:Real, AbstractMatrix{var\"#s10\"} where var\"#s10\"<:Real, AbstractMatrix{var\"#s9\"} where var\"#s9\"<:Real}","page":"Reference","title":"Geomorphometry.spread2","text":"spread2(points::Matrix{<:Real}, initial::Matrix{<:Real}, friction::Matrix{<:Real}; res=1, limit=Inf, iterations=3)\n\nPushbroom method for friction costs as discussed by *Eastman (1989) [eastman1989]. This method should scale much better (linearly) than the [tomlin1983] method, but can require more iterations than set by default (3) in the case of maze-like, uncrossable obstacles.\n\nOutput\n\nArray{Float64,2} Total friction distance\n\nArguments\n\npoints::Matrix{<:Real} Input Array\ninitial::Matrix{<:Real} Factor to exaggerate elevation\nfriction::Matrix{<:Real} Resolution of cell size\nres=1 Resolution or cell size\nlimit=Inf Initial fill value\niterations=3 Number of pushbroom iterations\n\n[eastman1989]: Eastman, J. Ronald. 1989. ‘Pushbroom Algorithms for Calculating Distances in Raster Grids’. In Proceedings, Autocarto, 9:288–97.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Geomorphometry.Horn","page":"Reference","title":"Geomorphometry.Horn","text":"Third order finite difference estimator using all 8 neighbors (Horn, 1981).\n\n\n\n\n\n","category":"type"},{"location":"reference/#Geomorphometry.MaximumDownwardGradient","page":"Reference","title":"Geomorphometry.MaximumDownwardGradient","text":"Maximum Downward Gradient\n\n\n\n\n\n","category":"type"},{"location":"reference/#Geomorphometry.ZevenbergenThorne","page":"Reference","title":"Geomorphometry.ZevenbergenThorne","text":"Second order finite difference estimator using all 4 neighbors (Zevenbergen and Thorne, 1987).\n\n\n\n\n\n","category":"type"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"(Image: CI) (Image: Codecov)","category":"page"},{"location":"#Geomorphometry","page":"Geomorphometry","title":"Geomorphometry","text":"","category":"section"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"Geospatial operations, cost and filtering algorithms as used in for elevation rasters.","category":"page"},{"location":"#Functionality","page":"Geomorphometry","title":"Functionality","text":"","category":"section"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"Terrain filters, such as Progressive Morphological Filters (PMF, SMF) and Skewness balancing\nGeospatial cost (friction) operations that mimic PCRaster. These functions should however be more Julian, extensible and scale better.\nVisualization, such as Perceptually Shaded Slope Map (PSSM)\nTerrain analysis functions, such as slope, aspect, roughness, Topographic Position Index (TPI), Terrain Ruggedness Index (TRI), curvature and hillslope.","category":"page"},{"location":"#Installation","page":"Geomorphometry","title":"Installation","text":"","category":"section"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"pkg> add Geomorphometry","category":"page"},{"location":"#Index","page":"Geomorphometry","title":"Index","text":"","category":"section"},{"location":"","page":"Geomorphometry","title":"Geomorphometry","text":"","category":"page"}]
}